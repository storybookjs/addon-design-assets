export const managerEntries = (entry: any = [], options: any) => {
  return [...entry, require.resolve("./register")];
};
