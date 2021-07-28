/**
 * Based on Rees Morris' article on CSP in NextJS:
 * https://reesmorris.co.uk/blog/implementing-proper-csp-nextjs-styled-components
 */

import { randomBytes } from 'crypto';
import Document, { Html, Head, Main, NextScript } from 'next/document'

const generateNonce = () => {
  return randomBytes(16).toString('base64');
};

// Return a Content Security Policy string
const generateCSP = (nonce) => {
  // Get our origin
  const apiURL = process.env.NEXT_PUBLIC_API
  const origin = apiURL.split('://')[1].split(':')[0]
  
  // Create and join list of allowed URLs
  const urls = [
    'transithealth.herokuapp.com',
    `${origin}` // TODO: Will this work?
  ].join(' ')
  
  // Define the directives/values
  const csp = {
    'default-src': `'none'`,
    // TODO: Fill in the rest of the Content-Security-Policy directives and values
  };

  // Override directives outside production
  if (process.env.NODE_ENV !== 'production') {
    csp['script-src'] = `'self' 'unsafe-eval' 'nonce-${nonce}'`;
  }

  // Convert to string and return
  const header = Object.entries(csp).reduce(
    (acc, [key, val]) => `${acc} ${key} ${val};`,
    ''
  );
  
  return header;
};

export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    const nonce = generateNonce();
    const csp = generateCSP(nonce);
    return {
      ...initialProps,
      nonce,
      csp,
    }
  }

  render() {
    const { nonce, csp } = this.props;
    // TODO: Add meta tag for header
    return (
      <Html>
        <Head nonce={nonce} />
        <body>
          <Main />
          <NextScript nonce={nonce} />
        </body>
      </Html>
    )
  }
}