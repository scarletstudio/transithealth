"""
Tests for data processing utility methods.
"""

from utils.data import double_quote_json


def test_double_quote_json():
    single_q = "{ 'a': 3, 'b': { 'c': 'this has \'escaped\' quotes' } }"
    actual = double_quote_json(single_q)
    expected = '{ "a": 3, "b": { "c": "this has \"escaped\" quotes" } }'
    assert actual == expected

def test_something():
    assert True
