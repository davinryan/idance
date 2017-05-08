import * as convict from 'convict';

export const config: convict.Config = convict({
  NODE_ENV: {
    doc: 'The application environment.',
    format: [
      'production',
      'development',
      'staging',
      'test'
    ],
    default: 'development',
    env: 'NODE_ENV'
  },
  GOOGLE_ANALYTICS_VIEW_ID: {
    doc: 'Google Analytics view id that indicates which analytics account\'s view we should look to to read ' +
    'analytics data from',
    format: String,
    default: '141337572',
    env: 'GOOGLE_ANALYTICS_VIEW_ID'
  },
  GOOGLE_ANALYTICS_PRIVATE_KEY: {
    doc: 'Google Analytics private key that belongs to a service account using analytics API V4',
    format: String,
    default: '-----BEGIN PRIVATE KEY-----\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQC2x9RHnZ0WnnXV\nR7am' +
    'vHAqy5wsfG+bTxPfmcs1XM85NaxbeYL8cjoXhXqAn9GowRlKQOi/iEE+sarl\n04U08HvsGh4JonsgeCvkYwK+oTZQyxK43WrK2caNpIwoWe' +
    'kqZ0bnbb62X8XpW+dY\n/fQGBKafjLehWQXD/DWqXhCkAJuPCCsPJvpxOF2XGseipqHDgK3cCi5vKjZ08sdy\nmddLhx/uAFTGNj8iALQLHm' +
    '5lVQ4VjCYAbyA/wA1uEZpgFsQ+DHsVi9IILROThwui\n6Sbwtp1Wtlv5jjN7Xc/nN1OiUXd8Tu8eW1kCOOFpPzaewo0RZangLXLfV93ynPr+' +
    '\nyTQSQyO9AgMBAAECggEALAvRswRfY6ECAkiK0nlcimOQmgPOnV2cC2kzWAOqiD3P\n8CdDEnSwXRS0ZaSd0I3f+03TCLzcBDCqX0Huusgt' +
    'BMNyc53tD/EFmr7lXWzZ+vRE\n6bmpz4JVX7LEd8Da+HX01zZSG/7OYaLdCEwCbyTVxmMRqVcblZQElq6eUfc3hWrp\nOY0XilnohWi/2Y6Z' +
    'U1lgpxzL/BQPak/db0qQIT5I2WPjG0H8GZU1nYWLE0qpxLmK\nPaEGKMw0mHr3oIGZYasiD8sSFiKpPf7Itva6FN0ADUvHYP6BxK7E9A4Bye' +
    'gSzBro\nVaI79l40QW0592aoMAa6lOjcZGJS4Q9lwRovF+0KIQKBgQDbRmn+4uVhAwelTBCL\nxNsFcKKKqFbvhWIjU2tGijb4jhwp8EifmR' +
    'kR8CXI1zTpJGwo952ihyVnsc0vouce\npFjVPYYUAGcwCipvSjz0738Pt2G+2gMDxeJsIRvD3gL7IFKG7cd5JGUTHWYQLyQd\nj00DTCXYMo' +
    'Vz5knAM6DIiQej9QKBgQDVZK/NexNyVjr1CxciIvpWX86/h5tQK1eF\nrWwTEXJ8Bud7dd4zstWWro7ihcgkC0hNcrZLbN3MQTn1vu7f6ynW' +
    'VApx8EoKXUmB\nEcvu5zcd7sLHvgL/By+6jBwlzioRPh3Ca6L45pgYab9SWqp0IhJBFDFW3aqZU14o\nc8ndmh7rqQKBgQCxugXpqQBgPDNz' +
    'QA7dKqaXZy7nkgA8zXC4z0FRAHAD0DN1rqM+\ncLnIN0x42C2zlmjwX5ruA/pGbO+xX6lSxcSWufI1vgnk/yhb4eE8ae4jz/Ay38O3\nyCl4' +
    'mPFHNWhXIWCiqpGWV/BwqNBz57GvH9o9BPhbnr9aLFq0pWP5hk+iDQKBgHPg\njSbD4rd/49wU/abn35DvzdFrzgcmwgwxNDLWkpiPFzyPsO' +
    '3Z+uosOCMCCsCn78c+\nt4cVwwubj+HGoOivRrTARjvBBDPEnJmeFGPS4rc6ZEMbB319ZYmjc9WDsoxScs6U\nrJcEgSsgoWgTG+Sca9UzJe' +
    'fJz04bW1IULlZLzuahAoGAf2YqLmtowVqPEGp9Hbb8\n6bsLHR29bdHpR5Dfp1HFqHniORXZ8mtpuOhvJhwavk0LyKjTyCovmf8xxZoQ9+ZJ' +
    '\nfe5Bx5oQsWdV29qtuCssXLP4AlRULqVZBP7ZWKElZTqRU3imdEz4coRxLfXAFx5k\naSWJThN2he7P/Bhq+QbV8gs=\n-----END PRIVA' +
    'TE KEY-----\n',
    env: 'GOOGLE_ANALYTICS_PRIVATE_KEY'
  },
  GOOGLE_ANALYTICS_CLIENT_EMAIL: {
    doc: 'Google Analytics client email that has been given read/view permission to access an analytics account',
    format: String,
    default: 'idance@idance-163607.iam.gserviceaccount.com',
    env: 'GOOGLE_ANALYTICS_CLIENT_EMAIL'
  },
  CACHE_TIMEOUT: {
    doc: 'Time in hours to wait until cache should be cleared',
    format: Number,
    default: 24,
    env: 'CACHE_TIMEOUT'
  },
  LOG_LEVEL: {
    doc: 'Log level. Can be debug, warn, info or error',
    format: String,
    default: 'debug',
    env: 'LOG_LEVEL'
  },
  ADMIN_STATIC_CONTENT_PATH: {
    doc: 'Root Path of admin application',
    format: String,
    default: '../../dist/admin',
    env: 'ADMIN_STATIC_CONTENT_PATH'
  },
  MAIN_STATIC_CONTENT_PATH: {
    doc: 'Root Path of main application',
    format: String,
    default: '../../dist/main',
    env: 'MAIN_STATIC_CONTENT_PATH'
  },
  PORT: {
    doc: 'Default Path',
    format: Number,
    default: 3000,
    env: 'PORT'
  },
  ADMIN_CONTEXT_ROOT: {
    doc: 'Context path for main admin URL',
    format: String,
    default: '/admin',
    env: 'ADMIN_CONTEXT_ROOT'
  },
  MAIN_CONTEXT_ROOT: {
    doc: 'Context path for main admin URL',
    format: String,
    default: '/',
    env: 'MAIN_CONTEXT_ROOT'
  }
});

config.validate();
