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
import React from 'react';
import { t, validateNonEmpty } from '@superset-ui/core';
import {


D3_FORMAT_DOCS,
D3_FORMAT_OPTIONS,
D3_TIME_FORMAT_OPTIONS,
sections,
emitFilterControl } from
'@superset-ui/chart-controls';
import { DEFAULT_FORM_DATA } from './types';
import { legendSection } from '../controls';import { jsx as ___EmotionJSX } from "@emotion/react";

const {
  donut,
  innerRadius,
  labelsOutside,
  labelType,
  labelLine,
  outerRadius,
  numberFormat,
  showLabels } =
DEFAULT_FORM_DATA;

const config = {
  controlPanelSections: [
  sections.legacyRegularTime,
  {
    label: t('Query'),
    expanded: true,
    controlSetRows: [
    ['groupby'],
    ['metric'],
    ['adhoc_filters'],
    emitFilterControl,
    ['row_limit'],
    [
    {
      name: 'sort_by_metric',
      config: {
        default: true,
        type: 'CheckboxControl',
        label: t('Sort by metric'),
        description: t(
        'Whether to sort results by the selected metric in descending order.') } }]] },






  {
    label: t('Chart Options'),
    expanded: true,
    controlSetRows: [
    ['color_scheme'],
    [
    {
      name: 'show_labels_threshold',
      config: {
        type: 'TextControl',
        label: t('Percentage threshold'),
        renderTrigger: true,
        isFloat: true,
        default: 5,
        description: t(
        'Minimum threshold in percentage points for showing labels.') } }],




    ...legendSection,
    // eslint-disable-next-line react/jsx-key
    [___EmotionJSX("h1", { className: "section-header" }, t('Labels'))],
    [
    {
      name: 'label_type',
      config: {
        type: 'SelectControl',
        label: t('Label Type'),
        default: labelType,
        renderTrigger: true,
        choices: [
        ['key', 'Category Name'],
        ['value', 'Value'],
        ['percent', 'Percentage'],
        ['key_value', 'Category and Value'],
        ['key_percent', 'Category and Percentage'],
        ['key_value_percent', 'Category, Value and Percentage']],

        description: t('What should be shown on the label?') } }],



    [
    {
      name: 'number_format',
      config: {
        type: 'SelectControl',
        freeForm: true,
        label: t('Number format'),
        renderTrigger: true,
        default: numberFormat,
        choices: D3_FORMAT_OPTIONS,
        description: `${t(
        'D3 format syntax: https://github.com/d3/d3-format')
        } ${t('Only applies when "Label Type" is set to show values.')}` } }],



    [
    {
      name: 'date_format',
      config: {
        type: 'SelectControl',
        freeForm: true,
        label: t('Date format'),
        renderTrigger: true,
        choices: D3_TIME_FORMAT_OPTIONS,
        default: 'smart_date',
        description: D3_FORMAT_DOCS } }],



    [
    {
      name: 'show_labels',
      config: {
        type: 'CheckboxControl',
        label: t('Show Labels'),
        renderTrigger: true,
        default: showLabels,
        description: t('Whether to display the labels.') } }],



    [
    {
      name: 'labels_outside',
      config: {
        type: 'CheckboxControl',
        label: t('Put labels outside'),
        default: labelsOutside,
        renderTrigger: true,
        description: t('Put the labels outside of the pie?'),
        visibility: ({ controls }) => {var _controls$show_labels;return (
            Boolean(controls == null ? void 0 : (_controls$show_labels = controls.show_labels) == null ? void 0 : _controls$show_labels.value));} } }],



    [
    {
      name: 'label_line',
      config: {
        type: 'CheckboxControl',
        label: t('Label Line'),
        default: labelLine,
        renderTrigger: true,
        description: t(
        'Draw line from Pie to label when labels outside?'),

        visibility: ({ controls }) => {var _controls$show_labels2;return (
            Boolean(controls == null ? void 0 : (_controls$show_labels2 = controls.show_labels) == null ? void 0 : _controls$show_labels2.value));} } }],



    // eslint-disable-next-line react/jsx-key
    [___EmotionJSX("h1", { className: "section-header" }, t('Pie shape'))],
    [
    {
      name: 'outerRadius',
      config: {
        type: 'SliderControl',
        label: t('Outer Radius'),
        renderTrigger: true,
        min: 10,
        max: 100,
        step: 1,
        default: outerRadius,
        description: t('Outer edge of Pie chart') } }],



    [
    {
      name: 'donut',
      config: {
        type: 'CheckboxControl',
        label: t('Donut'),
        default: donut,
        renderTrigger: true,
        description: t('Do you want a donut or a pie?') } }],



    [
    {
      name: 'innerRadius',
      config: {
        type: 'SliderControl',
        label: t('Inner Radius'),
        renderTrigger: true,
        min: 0,
        max: 100,
        step: 1,
        default: innerRadius,
        description: t('Inner radius of donut hole'),
        visibility: ({ controls }) => {var _controls$donut;return (
            Boolean(controls == null ? void 0 : (_controls$donut = controls.donut) == null ? void 0 : _controls$donut.value));} } }]] }],






  controlOverrides: {
    series: {
      validators: [validateNonEmpty],
      clearable: false },

    row_limit: {
      default: 100 } } };const _default =




config;export default _default;;(function () {var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;if (!reactHotLoader) {return;}reactHotLoader.register(donut, "donut", "/Users/evan/GitHub/superset/superset-frontend/plugins/plugin-chart-echarts/src/Pie/controlPanel.tsx");reactHotLoader.register(innerRadius, "innerRadius", "/Users/evan/GitHub/superset/superset-frontend/plugins/plugin-chart-echarts/src/Pie/controlPanel.tsx");reactHotLoader.register(labelsOutside, "labelsOutside", "/Users/evan/GitHub/superset/superset-frontend/plugins/plugin-chart-echarts/src/Pie/controlPanel.tsx");reactHotLoader.register(labelType, "labelType", "/Users/evan/GitHub/superset/superset-frontend/plugins/plugin-chart-echarts/src/Pie/controlPanel.tsx");reactHotLoader.register(labelLine, "labelLine", "/Users/evan/GitHub/superset/superset-frontend/plugins/plugin-chart-echarts/src/Pie/controlPanel.tsx");reactHotLoader.register(outerRadius, "outerRadius", "/Users/evan/GitHub/superset/superset-frontend/plugins/plugin-chart-echarts/src/Pie/controlPanel.tsx");reactHotLoader.register(numberFormat, "numberFormat", "/Users/evan/GitHub/superset/superset-frontend/plugins/plugin-chart-echarts/src/Pie/controlPanel.tsx");reactHotLoader.register(showLabels, "showLabels", "/Users/evan/GitHub/superset/superset-frontend/plugins/plugin-chart-echarts/src/Pie/controlPanel.tsx");reactHotLoader.register(config, "config", "/Users/evan/GitHub/superset/superset-frontend/plugins/plugin-chart-echarts/src/Pie/controlPanel.tsx");reactHotLoader.register(_default, "default", "/Users/evan/GitHub/superset/superset-frontend/plugins/plugin-chart-echarts/src/Pie/controlPanel.tsx");})();;(function () {var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;leaveModule && leaveModule(module);})();