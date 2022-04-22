import Item from "./Item";

export default class Cigar extends Item {
  constructor(description:string, price: number){
    super("Cigar", description, price);
  }
  
  getTax(): number {
    return 0.2
  }

}