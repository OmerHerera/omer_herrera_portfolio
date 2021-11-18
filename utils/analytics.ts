import mixpanel from 'mixpanel-browser';
// Enabling the debug mode flag is useful during implementation,
// but it's recommended you remove it for production 
//process?.env?.MIXPANEL_KEY && mixpanel.init('MIXPANEL_KEY', {debug: true});
process?.env?.NEXT_PUBLIC_MIXPANEL_KEY && mixpanel.init(process?.env?.NEXT_PUBLIC_MIXPANEL_KEY, {debug: false});
export function track(eventName: string) {
  process?.env?.MIXPANEL_KEY && mixpanel.track(eventName);
}