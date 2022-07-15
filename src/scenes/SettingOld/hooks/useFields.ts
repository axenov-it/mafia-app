export const useFields = (register: any) => ({
  numberGamers: register("numberGamers", {
    required: "Поле обов'язково до заповнення",
    pattern: { value: /^[0-9]{0,2}$/, message: "Не больше 2 цыфр " },
  }),
});
