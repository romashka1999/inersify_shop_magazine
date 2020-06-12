import { Router } from 'express';

const _router = Router();

export function Get(path: string) {
    return (target: any, propertyName: string, descriptor: PropertyDescriptor) => {
        console.log(target)
        _router.get(path, target[propertyName]);
    }
}

export const appRouter = _router;