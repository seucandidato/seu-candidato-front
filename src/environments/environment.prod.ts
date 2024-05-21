declare global {
  interface Window {
    env: any;
  }
}

export const environment = {
  production: true,
  env: (window as any)['env'] && (window as any)['env']['ENV'],
  apiUrl: (window as any)['env'] && (window as any)['env']['BACKEND_URL'],
};