import {
  NativeModules,
} from 'react-native';

const {SegmentAnalytics} = NativeModules;

export default {
  setup: function (key, options = {}) {
    if (!options.flushAt) options.flushAt = 20

    SegmentAnalytics.setup(key, options)
  },

  identify: function (userId, traits = {}) {
    SegmentAnalytics.identify(userId, traits)
  },

  track: function (event, properties = {}) {
    SegmentAnalytics.track(event, properties)
  },

  screen: function (name, properties = {}) {
    SegmentAnalytics.screen(name, properties)
  },

  group: function (groupId, traits = {}) {
    SegmentAnalytics.group(groupId, traits)
  },

  alias: function (newId) {
    SegmentAnalytics.alias(newId)
  },

  reset: function () {
    SegmentAnalytics.reset()
  },

  flush: function () {
    SegmentAnalytics.flush()
  },

  enable: function () {
    SegmentAnalytics.enable()
  },

  disable: function () {
    SegmentAnalytics.disable()
  }
}