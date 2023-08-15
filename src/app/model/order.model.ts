export class Orders {
  itemName: string;
  price: number;
  quantity: number;
  image: Promise<string | void>;

  constructor(
    itemName: string,
    price: number,
    quantity: number,
    image: Promise<string | void>
  ) {
    this.itemName = itemName;
    this.price = price;
    this.quantity = quantity;
    this.image = image;
  }
}
