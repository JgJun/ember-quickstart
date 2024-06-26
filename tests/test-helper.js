import Application from 'ember-quickstart/app';
import config from 'ember-quickstart/config/environment';
import * as QUnit from 'qunit';
import { setApplication } from '@ember/test-helpers';
import { setup } from 'qunit-dom';
import { start } from 'ember-qunit';
import {
  forceModulesToBeLoaded,
  sendCoverage,
} from 'ember-cli-code-coverage/test-support';

setApplication(Application.create(config.APP));

setup(QUnit.assert);

start();
QUnit.done(async function () {
  forceModulesToBeLoaded();
  await sendCoverage();
});
