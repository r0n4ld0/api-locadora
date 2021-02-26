import { Connection, createConnection, getConnectionOptions } from 'typeorm';

export default async (): Promise<Connection | undefined> => {
  const options = await getConnectionOptions();
  console.log();
  return createConnection(options);
};
