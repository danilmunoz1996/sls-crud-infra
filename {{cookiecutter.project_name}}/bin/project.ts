#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from 'aws-cdk-lib';
import { {{cookiecutter.model_class_name}}Stack } from '../lib/{{cookiecutter.model}}-stack';

const app = new cdk.App();
new {{cookiecutter.model_class_name}}Stack(app, '{{cookiecutter.model_class_name}}Stack', {});