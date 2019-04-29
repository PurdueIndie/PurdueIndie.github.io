from jinja2 import Template
from dataclasses import dataclass # as close to a struct as we can get in Python (introduced in Python 3.7)

# Class for a team member
@dataclass
class TeamMember:
	name: str
	profile_pic: str
	slogan: str

# Read CSV file

# Call template

# Goal is
# 1. Use Google Form (super easy for club members)
# 2. Convert to CSV (done by Google Docs)
# 3. Run script (relatively easy for any CS majors)

# On our side
# 1. Read CSV
# 2. Turn it into data types we can use (i.e. format it so it matches the Jinja2 templates we have)
# 3. Call Jinja2 template()
# 4. commit and push
# 5. tada