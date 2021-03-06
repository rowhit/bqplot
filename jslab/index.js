/* Copyright 2015 Bloomberg Finance L.P.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

var bqplot = require('bqplot');
require("bqplot/css/bqplot.css");

var jupyterlab_widgets = require('@jupyterlab/nbwidgets');

/**
 * The widget manager provider.
 */
module.exports.default = {
  id: 'jupyter.extensions.bqplot',
  requires: [jupyterlab_widgets.INBWidgetExtension],
  activate: function(app, widgets) {
      widgets.registerWidget({
          name: 'bqplot',
          version: bqplot.version,
          exports: bqplot
      });
    },
  autoStart: true
};
