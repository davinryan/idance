import * as convict from 'convict';
import * as path from 'path';

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
    doc: 'Google Analytics view id that indicates which analytics account\'s view we should look to to read analytics data from',
    format: String,
    default: '141337572',
    env: 'GOOGLE_ANALYTICS_VIEW_ID'
  },
  GOOGLE_ANALYTICS_PRIVATE_KEY: {
    doc: 'Google Analytics private key that belongs to a service account that has access to the google analytics API V4',
    format: String,
    default: '-----BEGIN PRIVATE KEY-----\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQC2x9RHnZ0WnnXV\nR7amvHAqy5wsfG+bTxPfmcs1XM85NaxbeYL8cjoXhXqAn9GowRlKQOi/iEE+sarl\n04U08HvsGh4JonsgeCvkYwK+oTZQyxK43WrK2caNpIwoWekqZ0bnbb62X8XpW+dY\n/fQGBKafjLehWQXD/DWqXhCkAJuPCCsPJvpxOF2XGseipqHDgK3cCi5vKjZ08sdy\nmddLhx/uAFTGNj8iALQLHm5lVQ4VjCYAbyA/wA1uEZpgFsQ+DHsVi9IILROThwui\n6Sbwtp1Wtlv5jjN7Xc/nN1OiUXd8Tu8eW1kCOOFpPzaewo0RZangLXLfV93ynPr+\nyTQSQyO9AgMBAAECggEALAvRswRfY6ECAkiK0nlcimOQmgPOnV2cC2kzWAOqiD3P\n8CdDEnSwXRS0ZaSd0I3f+03TCLzcBDCqX0HuusgtBMNyc53tD/EFmr7lXWzZ+vRE\n6bmpz4JVX7LEd8Da+HX01zZSG/7OYaLdCEwCbyTVxmMRqVcblZQElq6eUfc3hWrp\nOY0XilnohWi/2Y6ZU1lgpxzL/BQPak/db0qQIT5I2WPjG0H8GZU1nYWLE0qpxLmK\nPaEGKMw0mHr3oIGZYasiD8sSFiKpPf7Itva6FN0ADUvHYP6BxK7E9A4ByegSzBro\nVaI79l40QW0592aoMAa6lOjcZGJS4Q9lwRovF+0KIQKBgQDbRmn+4uVhAwelTBCL\nxNsFcKKKqFbvhWIjU2tGijb4jhwp8EifmRkR8CXI1zTpJGwo952ihyVnsc0vouce\npFjVPYYUAGcwCipvSjz0738Pt2G+2gMDxeJsIRvD3gL7IFKG7cd5JGUTHWYQLyQd\nj00DTCXYMoVz5knAM6DIiQej9QKBgQDVZK/NexNyVjr1CxciIvpWX86/h5tQK1eF\nrWwTEXJ8Bud7dd4zstWWro7ihcgkC0hNcrZLbN3MQTn1vu7f6ynWVApx8EoKXUmB\nEcvu5zcd7sLHvgL/By+6jBwlzioRPh3Ca6L45pgYab9SWqp0IhJBFDFW3aqZU14o\nc8ndmh7rqQKBgQCxugXpqQBgPDNzQA7dKqaXZy7nkgA8zXC4z0FRAHAD0DN1rqM+\ncLnIN0x42C2zlmjwX5ruA/pGbO+xX6lSxcSWufI1vgnk/yhb4eE8ae4jz/Ay38O3\nyCl4mPFHNWhXIWCiqpGWV/BwqNBz57GvH9o9BPhbnr9aLFq0pWP5hk+iDQKBgHPg\njSbD4rd/49wU/abn35DvzdFrzgcmwgwxNDLWkpiPFzyPsO3Z+uosOCMCCsCn78c+\nt4cVwwubj+HGoOivRrTARjvBBDPEnJmeFGPS4rc6ZEMbB319ZYmjc9WDsoxScs6U\nrJcEgSsgoWgTG+Sca9UzJefJz04bW1IULlZLzuahAoGAf2YqLmtowVqPEGp9Hbb8\n6bsLHR29bdHpR5Dfp1HFqHniORXZ8mtpuOhvJhwavk0LyKjTyCovmf8xxZoQ9+ZJ\nfe5Bx5oQsWdV29qtuCssXLP4AlRULqVZBP7ZWKElZTqRU3imdEz4coRxLfXAFx5k\naSWJThN2he7P/Bhq+QbV8gs=\n-----END PRIVATE KEY-----\n',
    env: 'GOOGLE_ANALYTICS_PRIVATE_KEY'
  },
  GOOGLE_ANALYTICS_CLIENT_EMAIL: {
    doc: 'Google Analytics client email that has been given read/view permission to access an analytics account',
    format: String,
    default: 'idance@idance-163607.iam.gserviceaccount.com',
    env: 'GOOGLE_ANALYTICS_CLIENT_EMAIL'
  },
  LOG_LEVEL: {
    doc: 'Log level. Can be debug, warn, info or error',
    format: String,
    default: 'debug',
    env: 'LOG_LEVEL'
  },
  STATIC_CONTENT_PATH: {
    doc: 'Root Path of client application',
    format: String,
    default: path.join(__dirname, '../../../dist/public'),
    env: 'STATIC_CONTENT_PATH'
  },
  PORT: {
    doc: 'Context path for main URL',
    format: Number,
    default: 3000,
    env: 'PORT'
  },
  CONTEXT_ROOT: {
    doc: 'Context path for main URL',
    format: String,
    default: 'reports',
    env: 'CONTEXT_ROOT'
  }
});

config.validate();
