import { Component, ComponentInterface, Element } from '@stencil/core';

import svg from '../../../../assets/svg/mat/filter-none/two-tone.svg';

@Component({ tag: 'uni-mat-tt-filter-none' })
export class UniMatTtFilterNoneComponent implements ComponentInterface {

  @Element() el!: HTMLElement;

  componentWillLoad(): Promise<void> | void {
    this.el.innerHTML = svg;
  }
}
