import Application from '../app';
import config from 'lungebox/config/environment';
import { setApplication } from '@ember/test-helpers';
import { start } from 'ember-qunit';
import 'qunit-dom';
import setupSinon from 'ember-sinon-qunit';

setApplication(Application.create(config.APP));

setupSinon();

start();
