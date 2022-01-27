/*
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
import ErrorBoundary from 'react-error-boundary';
import { ParentSize } from '@vx/responsive';
import { createSelector } from 'reselect';
import { parseLength } from '../../dimension';
import SuperChartCore from './SuperChartCore';
import DefaultFallbackComponent from './FallbackComponent';
import ChartProps from '../models/ChartProps';
import NoResultsComponent from './NoResultsComponent';
const defaultProps = {
    FallbackComponent: DefaultFallbackComponent,
    height: 400,
    width: '100%',
    enableNoResults: true,
};
export default class SuperChart extends React.PureComponent {
    /**
     * SuperChart's core
     */
    core;
    createChartProps = ChartProps.createSelector();
    parseDimension = createSelector(({ width }) => width, ({ height }) => height, (width, height) => {
        // Parse them in case they are % or 'auto'
        const widthInfo = parseLength(width);
        const heightInfo = parseLength(height);
        const boxHeight = heightInfo.isDynamic
            ? `${heightInfo.multiplier * 100}%`
            : heightInfo.value;
        const boxWidth = widthInfo.isDynamic
            ? `${widthInfo.multiplier * 100}%`
            : widthInfo.value;
        const style = {
            height: boxHeight,
            width: boxWidth,
        };
        // bounding box will ensure that when one dimension is not dynamic
        // e.g. height = 300
        // the auto size will be bound to that value instead of being 100% by default
        // e.g. height: 300 instead of height: '100%'
        const BoundingBox = widthInfo.isDynamic &&
            heightInfo.isDynamic &&
            widthInfo.multiplier === 1 &&
            heightInfo.multiplier === 1
            ? React.Fragment
            : ({ children }) => (<div style={style}>{children}</div>);
        return { BoundingBox, heightInfo, widthInfo };
    });
    static defaultProps = defaultProps;
    setRef = (core) => {
        this.core = core;
    };
    renderChart(width, height) {
        const { id, className, chartType, preTransformProps, overrideTransformProps, postTransformProps, onRenderSuccess, onRenderFailure, disableErrorBoundary, FallbackComponent, onErrorBoundary, Wrapper, queriesData, enableNoResults, ...rest } = this.props;
        const chartProps = this.createChartProps({
            ...rest,
            queriesData,
            height,
            width,
        });
        let chart;
        // Render the no results component if the query data is null or empty
        const noResultQueries = enableNoResults &&
            (!queriesData ||
                queriesData.every(({ data }) => !data || (Array.isArray(data) && data.length === 0)));
        if (noResultQueries) {
            chart = (<NoResultsComponent id={id} className={className} height={height} width={width}/>);
        }
        else {
            const chartWithoutWrapper = (<SuperChartCore ref={this.setRef} id={id} className={className} chartType={chartType} chartProps={chartProps} preTransformProps={preTransformProps} overrideTransformProps={overrideTransformProps} postTransformProps={postTransformProps} onRenderSuccess={onRenderSuccess} onRenderFailure={onRenderFailure}/>);
            chart = Wrapper ? (<Wrapper width={width} height={height}>
          {chartWithoutWrapper}
        </Wrapper>) : (chartWithoutWrapper);
        }
        // Include the error boundary by default unless it is specifically disabled.
        return disableErrorBoundary === true ? (chart) : (<ErrorBoundary FallbackComponent={(props) => (<FallbackComponent width={width} height={height} {...props}/>)} onError={onErrorBoundary}>
        {chart}
      </ErrorBoundary>);
    }
    render() {
        const { heightInfo, widthInfo, BoundingBox } = this.parseDimension(this.props);
        // If any of the dimension is dynamic, get parent's dimension
        if (widthInfo.isDynamic || heightInfo.isDynamic) {
            const { debounceTime } = this.props;
            return (<BoundingBox>
          <ParentSize debounceTime={debounceTime}>
            {({ width, height }) => this.renderChart(widthInfo.isDynamic ? Math.floor(width) : widthInfo.value, heightInfo.isDynamic ? Math.floor(height) : heightInfo.value)}
          </ParentSize>
        </BoundingBox>);
        }
        return this.renderChart(widthInfo.value, heightInfo.value);
    }
}
//# sourceMappingURL=SuperChart.jsx.map