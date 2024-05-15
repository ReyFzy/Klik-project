export function initLocals(req, res, next) {
    req.locals = {};
    next();
}
