"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = noCache;

function noCache(req, res, next) {
  res.set("Cache-Control", "no-store, no-cache, must-revalidate, private");
  next();
}

;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2xpYi9taWRkbGV3YXJlcy9uby1jYWNoZS5qcyJdLCJuYW1lcyI6WyJub0NhY2hlIiwicmVxIiwicmVzIiwibmV4dCIsInNldCJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFlLFNBQVNBLE9BQVQsQ0FBaUJDLEdBQWpCLEVBQXNCQyxHQUF0QixFQUEyQkMsSUFBM0IsRUFBaUM7QUFDOUNELEVBQUFBLEdBQUcsQ0FBQ0UsR0FBSixDQUFRLGVBQVIsRUFBeUIsOENBQXpCO0FBQ0FELEVBQUFBLElBQUk7QUFDTDs7QUFBQSIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIG5vQ2FjaGUocmVxLCByZXMsIG5leHQpIHtcbiAgcmVzLnNldChcIkNhY2hlLUNvbnRyb2xcIiwgXCJuby1zdG9yZSwgbm8tY2FjaGUsIG11c3QtcmV2YWxpZGF0ZSwgcHJpdmF0ZVwiKTtcbiAgbmV4dCgpO1xufTsiXX0=