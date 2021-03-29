import Component from '@glimmer/component';

export default class ClickHereV1Component extends Component {
    code = `<div {{on "click" @someClick}} class="my-button">
  Click here
</div>`
}
