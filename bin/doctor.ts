#!/usr/bin/env ts-node

import {
    Config
  , Wechaty
} from '../'
import * as os from 'os'

const wechaty = Wechaty.instance()

console.log(`

#### Wechaty Doctor

1. Wechaty version: ${wechaty.version()}
2. ${os.type()} ${os.arch()} version ${os.release()} memory ${Math.floor(os.freemem() / 1024 / 1024)}/${Math.floor(os.totalmem() / 1024 / 1024)} MB
3. Docker: ${Config.isDocker}

`)
