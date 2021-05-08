"""
Utility methods for data processing.
"""

import re


def double_quote_json(s):
    """
    Converts JSON to use double quotes instead of single quotes.
    From StackOverflow: https://stackoverflow.com/a/50257217
    Args:
        s (str): Stringified JSON that uses single quotes.
    Returns:
        Stringified JSON that uses double quotes (str).
    """
    p = re.compile('(?<!\\\\)\'')
    s = p.sub('\"', s)
    return s
