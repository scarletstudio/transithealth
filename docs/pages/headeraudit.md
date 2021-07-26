# Cybersecurity Task 1 - HTTP Header Audit

There are many free tools available that can help us audit the security standards of a given site. 
A very common, yet overlooked security standard is the HTTP Headers that a site transfers when a user accesses their site.
[SecurityHeaders.com](https://securityheaders.com/) is one great free tool that we can use. 
It gives a letter grade for a URL, as well as gives details of what can be fixed and what can be improved.

## Part 1 - Report
Analyze the security standards implemented on our [project website](https://scarletstudio.github.io/transithealth/) using the free header checking tool [SecurityHeaders.com](https://securityheaders.com).  

- Describe each header and how it applies to the usage of our site.  It’s possible some headers are not relevant to our site.  Ask if you are not sure.
- Determine which headers are missing
- Determine which headers are present, but could be improved (if any)
- Determine which headers are properly implemented.
- Assess & describe your findings in a report that is written in a jupyter notebook.
- Create a pull request with your new notebook & send your mentor to approve to merge to into the main branch.

## Part 2 - Perform Fix
Now that you know what is missing and/or has to be improved, dig around in the Transit Health project to try and find out our server sets these headers and where the missing ones can be added (hint: look for a python file, you can also search for keywords in the cloud9 file explorer).  If you need to see some examples, you can google “React.js/flask set http headers” or something similar.  

- Make the necessary changes that the report from Part 1 told you to fix. 
- Make a pull request to merge your code improvements to the main branch
- After these changes have been deployed to the test site (ask a mentor to do it or walk you through it), re-test the site using securityheaders.com & examine the results. 
- Make a second jupyter entry detailing your code updates & the results.
