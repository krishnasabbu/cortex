import * as fs from 'fs-extra'
import officeParser from 'officeparser'
import { isOfficeFilePath } from '../shared/file-extensions'

export async function parseFile(filePath: string) {
  if (isOfficeFilePath(filePath)) {
    try {
      const data = await officeParser.parseOfficeAsync(filePath)
      return data
    } catch (error) {
      throw error
    }
  }
  const data = await fs.readFile(filePath, 'utf8')
  return data
}
