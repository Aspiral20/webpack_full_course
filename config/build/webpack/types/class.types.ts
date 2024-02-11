export type ClassConstructorParameters<ClassType extends abstract new (...args: any) => any> = ConstructorParameters<ClassType>
