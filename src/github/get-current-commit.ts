import {github} from './client'

export const getLatestCommitFromBranch = async (
  branch: string
): Promise<string> => {
  const resp = await github.client.rest.repos.getCommit({
    ...github.CONFIG,
    ref: branch
  })

  console.log({resp})

  return resp.data.sha
}
