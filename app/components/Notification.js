/* global fetch */
/* global localStorage */

import { useState, useEffect } from 'react'

export function Notification(props) {
  // By default, notification is hidden until set to visible.
  const [ isVisible, setIsVisible ] = useState(props.visible || false);
  const classes = props.classes || [];
  const display = isVisible ? "block" : "hidden";

  useEffect(() => {
    setIsVisible(props.visible);
  }, [props.visible]);

  return (
    <div className={`Notification ${classes.join(" ")} ${display}`}>
      <div className="CloseHolder">
        <span
          className="Close"
          onClick={() => {
            setIsVisible(false);
          }}
          >x</span>
        </div>
      {props.children}
    </div>
  );
};

export function FailureNotification(props) {
  const error = props.data || props.error;
  const errorMessage = error && error.toString();
  const classes = props.classes || ["Failure"];
  return (
    <div>
      <Notification classes={classes} visible={props.error}>
        <p>{errorMessage}</p>
      </Notification>
    </div>
  );
}

/*
 * Send a request to wake up our server.
 * Return a promise that always resolves, even if there is a failure.
 * Will resolve with true if success, false if failure.
 */
async function pingServer() {
  return new Promise((resolve, reject) => {
    fetch(`${process.env.NEXT_PUBLIC_API}/`).then((res) => {
      resolve(true);
    }).catch((err) => {
      resolve(false);
    });
  });
}

const LOCAL_STORAGE_LAST_PING = "transithealth__last_ping";
const WAIT_MS_BEFORE_NEXT_PING = 1000 * 60 * 5; // 5 mins in ms

const SERVER_MESSAGES = {
  LOADING: "Connecting to our server...",
  SUCCESS: "Connected successfully!",
  FAILURE: "Could not connect. Please reload page.",
};

export function ServerLoadingNotification() {
  const [ isLoading, setIsLoading ] = useState(true);
  const [ isSuccess, setIsSuccess ] = useState(true);
  const [ isVisible, setIsVisible ] = useState(false);

  useEffect(() => {
    let isSubscribed = true;
    let openTimer, closeTimer;

    // Only send ping if ping has not been sent recently.
    const lastPing = localStorage.getItem(LOCAL_STORAGE_LAST_PING);
    const sendPing = !lastPing || (Date.now() - lastPing) >= WAIT_MS_BEFORE_NEXT_PING;

    if (sendPing) {
      openTimer = setTimeout(() => {
        if (isSubscribed) {
          setIsVisible(true);
        }
      }, 1000);
      pingServer().then((success) => {
        if (isSubscribed) {
          setIsSuccess(success);
          setIsLoading(false);
        }
        // If successful, close notification after one second.
        if (success) {
          localStorage.setItem(LOCAL_STORAGE_LAST_PING, Date.now());
          closeTimer = setTimeout(() => {
            if (isSubscribed) {
              setIsVisible(false);
            }
          }, 1000);
        }
      });
    }

    return () => {
      isSubscribed = false;
      if (openTimer) {
        clearTimeout(openTimer);
      }
      if (closeTimer) {
        clearTimeout(closeTimer);
      }
    };
  }, []);

  const outcome = isLoading ? "" : (isSuccess ? "Success" : "Failure");
  const animation = !isLoading && isSuccess ? "FadeOut" : "FadeIn";
  const classes = [ "Bottom", "Narrow", outcome, animation ];
  const message = isLoading ? SERVER_MESSAGES.LOADING : (
      isSuccess ? SERVER_MESSAGES.SUCCESS : SERVER_MESSAGES.FAILURE
    );

  return (
    <div>
      <Notification classes={classes} visible={isVisible}>
        <p>{message}</p>
      </Notification>
    </div>
  );
};
