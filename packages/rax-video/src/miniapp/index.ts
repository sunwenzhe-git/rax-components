import fmtEvent from './fmtEvent';

const noop = () => {};

/**
 * supportMethods
 *
 * @see https://opendocs.alipay.com/mini/component/video
 */
const supportMethods = [
  'onPlay',
  'onPause',
  'onEnded',
  'onTimeUpdate',
  'onLoading',
  'onStop',
  'onRenderStart',
  'onError',
  'onFullScreenChange',
  'onClick',
  'onUserAction',
];

const cmptProps = supportMethods.reduce((prev, current) => {
  prev[current] = noop;
  return prev;
}, {});

const cmptMethods = supportMethods.reduce((prev, current) => {
  prev[current] = function(e) {
    const event = fmtEvent(this.props, e);
    this.props[current](event);
  };
  return prev;
}, {});

Component({
  data: {},
  props: {
    src: '',
    controls: true,
    autoPlay: false,
    loop: false,
    style: '',
    className: '',
    muted: false,
    id: '',
    extraInfo: {},
    mobilenetHintType: 1,
    ...cmptProps,
  },
  methods: {
    ...cmptMethods,
  },
});
