module.exports = (context, {owner, repo}) => {
  // method returns all the issues and pull requests
  console.log('In getAllIssues')
  return context.github.issues.getForRepo({
    owner,
    repo,
    state: 'all'
  })
}