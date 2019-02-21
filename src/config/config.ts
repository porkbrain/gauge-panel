import { Configuration } from './Configuration'
import { EnviromentVariableEmptyException } from './EnviromentVariableEmptyException'

/**
 * Gets process env variable or defaults it.
 *
 * @param key Key to look for
 * @param def Default value if any
 * @return Value of the enviroment variable
 * @throws {EnviromentVariableEmptyException}
 */
function env (key: string, def?: string) : string {
  // Retrives desired value from enviroment variables.
  const value: string = process.env[key]

  if (value === undefined && def === undefined) {
    throw new EnviromentVariableEmptyException
  }

  return value || def
}

export const config: Configuration = {
  DEBUG: env('ENV', 'DEV') === 'DEV',
  INDEX_FILE: 'static/index.html',
}