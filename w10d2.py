# / 
# Given an array of objects that contain a "category" key,
# return a hash table to group the objects by their "category".
# Make the grouping case-insensitive.
# Bonus: allow the key that is grouped by to be provided.
# /

objects = [
{
    "name": "Baby Yoda",
    "category": "cute",
},
{
    "name": "Cricket Protein",
    "category": "food",
},
{
    "name": "Shibe",
    "category": "Cute",
},
{
    "name": "Ancient India",
    "category": "Cradle of Civilization",
},
{
    "name": "Wasp Crackers",
    "category": "Food",
},
{
    "name": "The Fertile Crescent",
    "category": "Cradle of Civilization",
},
];

# expected = {
# cute: [
#     {
#     "name": "Baby Yoda",
#     "category": "cute",
#     },
#     {
#     "name": "Shibe",
#     "category": "Cute",
#     },
# ],
# food: [
#     {
#     "name": "Cricket Protein",
#     "category": "food",
#     },
#     {
#     "name": "Wasp Crackers",
#     "category": "Food",
#     },
# ],
# "cradle of civilization": [
#     {
#     "name": "Ancient India",
#     "category": "Cradle of Civilization",
#     },
#     {
#     "name": "The Fertile Crescent",
#     "category": "Cradle of Civilization",
#     },
# ],
# };

# /
#   Creates a hash table of case-insensitive categories mapped to the items
#   belonging to that "category".
#   - Time: O(?).
#   - Space: O(?).
#   @param {Array<Object>} items
#   @param {string} items."category"
#   @returns {Object<string, Array<Object>>} The hash "category" hash table with
#      string keys and array of objects as values.
#  /
def groupObjects(items):
    groupedByResult = {}
    for obj in items:
        category = obj['category'].lower()
        if category in groupedByResult:
            # groupedByResult[category].append(obj)
            itemsWithThisCatagory= groupedByResult[category]
            itemsWithThisCatagory.append(obj)
        else:
            groupedByResult[category] = [obj]
    return groupedByResult

print(groupObjects(objects))



# / 
# Given two strings S and T containing only lowercase letters and "#" characters,
# return if they are equal when both are typed into empty text editors.
# # character means a backspace character.
# i.e., after processing the backspaces, are the two strings equal?
# Bonus: solve in O(n) time
# /

S1 = "ab#c"
T1 = "ad#c"
# expected1 = true
# Explanation: Both S and T become "ac"

S2 = "ab##"
T2 = "c#d#"
# expected2 = true
# Explanation: Both S and T become ""

S3 = "a##c"
T3 = "#a#c"
# expected3 = true
# Explanation: Both S and T become "c"

S4 = "a#c"
T4 = "b"
# expected4 = false
# Explanation: S becomes "c" while T becomes "b".


# Determines if the given strings are equal after the backspace characters
# "#" are processed.
# - Time: O(?).
# - Space: O(?).
# @param {string} S
# @param {string} T
# @returns {boolean} Whether the given strings are equal after backspaces
# have been processed.

def backspaceStringCompare(S, T):
    sResult = ""
    tResult = ""
    for char in S:
        if char == '#':
            sResult = sResult[:-1]
        else:
            sResult += char
    for char in T:
        if char == '#':
            tResult = tResult[:-1]
        else:
            tResult += char
    return sResult == tResult

print(backspaceStringCompare(S1, T1))
print(backspaceStringCompare(S2, T2))
print(backspaceStringCompare(S3, T3))
print(backspaceStringCompare(S4, T4))
