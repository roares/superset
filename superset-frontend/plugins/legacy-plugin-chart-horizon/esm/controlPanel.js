(function () {var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;enterModule && enterModule(module);})();var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {return a;}; /**
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
import { t } from '@superset-ui/core';
import {

formatSelectOptions,
sections } from
'@superset-ui/chart-controls';

const config = {
  controlPanelSections: [
  sections.legacyRegularTime,
  {
    label: t('Query'),
    expanded: true,
    controlSetRows: [
    ['metrics'],
    ['adhoc_filters'],
    ['groupby'],
    ['limit', 'timeseries_limit_metric'],
    [
    {
      name: 'order_desc',
      config: {
        type: 'CheckboxControl',
        label: t('Sort Descending'),
        default: true,
        description: t('Whether to sort descending or ascending'),
        visibility: ({ controls }) =>
        Boolean(controls == null ? void 0 : controls.timeseries_limit_metric.value) } },


    {
      name: 'contribution',
      config: {
        type: 'CheckboxControl',
        label: t('Contribution'),
        default: false,
        description: t('Compute the contribution to the total') } }],



    ['row_limit', null]] },


  {
    label: t('Chart Options'),
    expanded: true,
    controlSetRows: [
    [
    {
      name: 'series_height',
      config: {
        type: 'SelectControl',
        renderTrigger: true,
        freeForm: true,
        label: t('Series Height'),
        default: '25',
        choices: formatSelectOptions([
        '10',
        '25',
        '40',
        '50',
        '75',
        '100',
        '150',
        '200']),

        description: t('Pixel height of each series') } },


    {
      name: 'horizon_color_scale',
      config: {
        type: 'SelectControl',
        renderTrigger: true,
        label: t('Value Domain'),
        choices: [
        ['series', 'series'],
        ['overall', 'overall'],
        ['change', 'change']],

        default: 'series',
        description: t(
        'series: Treat each series independently; overall: All series use the same scale; change: Show changes compared to the first data point in each series') } }]] }] };const _default =









config;export default _default;;(function () {var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;if (!reactHotLoader) {return;}reactHotLoader.register(config, "config", "/Users/evan/GitHub/superset/superset-frontend/plugins/legacy-plugin-chart-horizon/src/controlPanel.ts");reactHotLoader.register(_default, "default", "/Users/evan/GitHub/superset/superset-frontend/plugins/legacy-plugin-chart-horizon/src/controlPanel.ts");})();;(function () {var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;leaveModule && leaveModule(module);})();