// Copyright (c) 2023 Charlotte Jhu All rights reserved
//
// Created by: Charlotte Jhu
// Created on: May 2023
// This file contains the JS functions for index.html

'use strict'

window.onload = function () {
  // this calculates the volume of a sphere
  const params = new URLSearchParams(document.location.search)

  // input
  const radius = params.get('r')

  // process
  const volume = (4 / 3) * Math.PI * radius ** 3
  const dimensions = 'Radius (r) = ' + radius + ' units'

  // output
document.getElementById('radius').innerHTML = dimensions
document.getElementById('volume').innerHTML = 'Volume (V) = ' + volume.toFixed(2) + ' units³'
}
