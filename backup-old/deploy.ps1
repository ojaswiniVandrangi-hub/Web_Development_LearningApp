# Web Development Learning App Full Deployment Script

# Navigate to repo
cd C:\Users\ojasw\Documents\Web_Development_LearningApp

# Step 1: Backup old files
Write-Host "Backing up old files..."
if (-Not (Test-Path .\backup-old)) {
    mkdir backup-old
}
Get-ChildItem -Exclude .git, backup-old | Copy-Item -Destination .\backup-old -Recurse -Force

# Step 2: Copy new project files
Write-Host "Copying new project files..."
Copy-Item -Path "C:\Users\ojasw\web_development_learning_app\*" -Destination "." -Recurse -Force

# Step 3: Install dependencies
Write-Host "Installing npm dependencies..."
npm install

# Step 4: Build the project
Write-Host "Building the project..."
npm run build

# Step 5: Commit and push to GitHub
Write-Host "Committing and pushing changes to GitHub..."
git add .
$commitMessage = Read-Host "Enter commit message"
git commit -m "$commitMessage"
git push origin main

Write-Host "Deployment completed successfully!"
