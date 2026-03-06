import re
from difflib import SequenceMatcher

def string_match_score(str1: str, str2: str) -> float:
    _word_re = re.compile(r"[a-z0-9]+")
    
    def _tokens(s: str) -> list[str]:
        return _word_re.findall(s.lower())
    
    def _sim(a: str, b: str) -> float:
        return SequenceMatcher(None, a, b).ratio()
    
    def fuzzy_match_score(s1: str, s2: str) -> float:
        t1 = _tokens(s1)
        t2 = _tokens(s2)
    
        if not t1 and not t2:
            return 1.0
        if not t1 or not t2:
            return 0.0
    
        # For each token in t1, find best match in t2
        best1 = [max(_sim(w, v) for v in t2) for w in t1]
        # For each token in t2, find best match in t1
        best2 = [max(_sim(v, w) for w in t1) for v in t2]
    
        # Symmetric score: average of both directions
        return (sum(best1) / len(best1) + sum(best2) / len(best2)) / 2.0
    return fuzzy_match_score(str1, str2)
