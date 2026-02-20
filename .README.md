# Initialize the local folder as a Git repository
git init

# Add all your files to the staging area
git add .

# Create your first commit
git commit -m "Initial commit: Complete MERN Bookstore with Auth"

# Rename the branch to main
git branch -M main

# Link your local project to your GitHub repo
git remote add origin https://github.com/rajeshkonda071/book-store-app.git

# Push the code to GitHub
git push -u origin main