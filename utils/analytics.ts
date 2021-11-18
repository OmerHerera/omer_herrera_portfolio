import mixpanel from 'mixpanel-browser';
// Enabling the debug mode flag is useful during implementation,
// but it's recommended you remove it for production 
//process.env.MIXPANEL_KEY && mixpanel.init('MIXPANEL_KEY', {debug: true});
const secretKey:string = process.env.NEXT_PUBLIC_MIXPANEL_KEY || ""
secretKey && mixpanel.init(secretKey, { debug: false });
export function track(eventName: string) {
  secretKey && mixpanel.track(eventName);
}