def string_match_score(str1, str2):
    str1 = str1.lower().strip()
    str2 = str2.lower().strip()
    
    if str1 == str2:
        return 1.0
    
    set1 = set(str1.split())
    set2 = set(str2.split())
    
    max_score = 0.0
    for word1 in set1:
        for word2 in set2:
            if word1 == word2:
                max_score = max(max_score, 1.0)
            else:
                common_chars = set(word1).intersection(set(word2))
                score = len(common_chars) / max(len(set(word1)), len(set(word2))) if max(len(set(word1)), len(set(word2))) > 0 else 0.0
                max_score = max(max_score, score)
    return max_score