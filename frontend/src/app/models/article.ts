export class Article {
    constructor(_id = "", name = "", description = "", department = "", stock = 0,pu=0,imagen="") {
        this._id = _id;
        this.name = name;
        this.description = description;
        this.department = department;
        this.stock = stock;
        this.pu=pu;
        this.imagen=imagen;
      }
    
      _id: string;
      name: string;
      description: string;
      department: string;
      stock: number;
      pu: number;
      imagen: string;
}