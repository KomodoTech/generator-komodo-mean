'use strict';

import path from 'path';
import fs from 'fs';
import glob from 'glob';
import Promise from 'bluebird';
import {exec} from 'child_process';

const DEBUG = !!process.env.DEBUG; //NOTE: same as Boolean(process.env.DEBUG)
