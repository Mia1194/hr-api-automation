# Git
Git is a version control sistem that helps track changes in code allows multiple
people to callob on the same project efficientlu

# What is GitHub?
GitHub is a cloud based platform that hosts your Git responsitories.
It adds collaboration, sharing and security features on the top of Git.
GitHub allows you to:
 * Store your repositories online.
 * Share ypour code
 * 
 * 
### How Git Works (Simple Flow)
Git has 3 areas:
1. Working Directory(Local)-> Where you edit your files(your project directory.)
2. 
3. Repository(Local Gir Repo) -> Where commited verisions are store.
4. GitHub Repo(Remote Repository)-> Local commits(changes) are sent here.


## Configure Git
```bash
# check if the git is installed
git --version

# Set your global username and email
git confg
ig --global user.name "Your User Name"
git config --global user.email"Your Email"
```

### 2. Authenticate with GitHub(Using Personal Acces Token)
When you clone or push to GitHub for the first time, you'll need to authenticate.

##### Steps.
1. Go to `**Github -> Settings -> Developer Settings _> Personal Access Token -> Tokens
(classic)**`


#### Git Commands with Step-by-step Workflow

### Step 1 -> Initialize your Project Directory As a Git Directory
``` bash
git init
```
## Step 2(Optional - you can use this comment anytime) Check htis Status of Files
```bash
git status
```


## Step 3 : Adding files to Staging Area
- Telling git wich file/folders it shoul track
- If you have so many changhes and you want to track 
```bash
git add -A
```
-- If you want in
```bash
git add fileName
```
-- Track all changes in the directory
```bash
git add directoryName
```
**Untraking unwanted files** 
```bash
git reset fileName
```

**Untach(Reverse git add) for all**
```bash
git reset
```

## Step 4: Commit your changes
Once you complite all chanhes for your work, and will not do an additional change
you could commit.
```bash
git commit -m "Message is alwys a must"
```

## Step 5: Link Your local Repo to A Remote Repository
- You will create a repository space on the GitHub(or Bitbucket)
- Then
```bash 
git remote add remoteName remoteRepoLink
```

## Step 6: For the first time uou must create a MAIN branch for your remote repo
```bash
git branch -M main
```

-- Main doesn't have to be be mai, you could name your MAIN branch howevery you want.

## Step 7: Push Commited Changes to the Romote Repository
```bash
git push -u origin main
```
- origin is a remote repo name from step 5, main a branch name from step 6