// format number to rub. example: 30000 => 30 000 ₽
export const priceRu = (price: number) =>
    price
        .toString()
        .replace(/\B(?=(\d{3})+(?!\d))/g, " ")
        .concat(" ₽");
