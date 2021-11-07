// Interfaces with optional properties are written similar to other interfaces, with each optional property denoted by a ? at the end of the property name in the declaration.

interface Persona {
	nombre: string;
	edad: number;
	telefono: string | null;
}

class Empleado implements Persona {
	nombre: string;
	edad: number;
	telefono: string | null;
	constructor(nombre: string, edad: number, telefono: string | null = null) {
		this.nombre = nombre;
		this.edad = edad;
		this.telefono = telefono;
	}
}

const miguel: Empleado = new Empleado('miguel', 29);
