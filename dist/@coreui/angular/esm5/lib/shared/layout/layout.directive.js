import { __decorate, __metadata, __param } from "tslib";
import { Directive, ElementRef, HostListener, Inject, Input, OnInit, Renderer2 } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { asideMenuCssClasses, sidebarCssClasses } from '../classes';
import { ClassToggler } from '../toggle-classes';
/**
* Allows the sidebar to be toggled via click.
*/
var SidebarToggleDirective = /** @class */ (function () {
    function SidebarToggleDirective(classToggler) {
        this.classToggler = classToggler;
    }
    SidebarToggleDirective.prototype.ngOnInit = function () {
        this.bp = this.breakpoint;
    };
    SidebarToggleDirective.prototype.toggleOpen = function ($event) {
        $event.preventDefault();
        var cssClass = this.bp ? "sidebar-" + this.bp + "-show" : sidebarCssClasses[0];
        this.classToggler.toggleClasses(cssClass, sidebarCssClasses);
    };
    SidebarToggleDirective.ctorParameters = function () { return [
        { type: ClassToggler }
    ]; };
    __decorate([
        Input('appSidebarToggler'),
        __metadata("design:type", String)
    ], SidebarToggleDirective.prototype, "breakpoint", void 0);
    __decorate([
        HostListener('click', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], SidebarToggleDirective.prototype, "toggleOpen", null);
    SidebarToggleDirective = __decorate([
        Directive({
            selector: '[appSidebarToggler]',
            providers: [ClassToggler]
        }),
        __metadata("design:paramtypes", [ClassToggler])
    ], SidebarToggleDirective);
    return SidebarToggleDirective;
}());
export { SidebarToggleDirective };
var SidebarMinimizeDirective = /** @class */ (function () {
    function SidebarMinimizeDirective(document, renderer) {
        this.document = document;
        this.renderer = renderer;
    }
    SidebarMinimizeDirective.prototype.toggleOpen = function ($event) {
        $event.preventDefault();
        var body = this.document.body;
        body.classList.contains('sidebar-minimized') ?
            this.renderer.removeClass(body, 'sidebar-minimized') :
            this.renderer.addClass(body, 'sidebar-minimized');
    };
    SidebarMinimizeDirective.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: Inject, args: [DOCUMENT,] }] },
        { type: Renderer2 }
    ]; };
    __decorate([
        HostListener('click', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], SidebarMinimizeDirective.prototype, "toggleOpen", null);
    SidebarMinimizeDirective = __decorate([
        Directive({
            selector: '[appSidebarMinimizer]'
        }),
        __param(0, Inject(DOCUMENT)),
        __metadata("design:paramtypes", [Object, Renderer2])
    ], SidebarMinimizeDirective);
    return SidebarMinimizeDirective;
}());
export { SidebarMinimizeDirective };
var MobileSidebarToggleDirective = /** @class */ (function () {
    function MobileSidebarToggleDirective(document, renderer) {
        this.document = document;
        this.renderer = renderer;
    }
    MobileSidebarToggleDirective.prototype.toggleOpen = function ($event) {
        $event.preventDefault();
        var body = this.document.body;
        body.classList.contains('sidebar-show') ?
            this.renderer.removeClass(body, 'sidebar-show') :
            this.renderer.addClass(body, 'sidebar-show');
    };
    MobileSidebarToggleDirective.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: Inject, args: [DOCUMENT,] }] },
        { type: Renderer2 }
    ]; };
    __decorate([
        HostListener('click', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], MobileSidebarToggleDirective.prototype, "toggleOpen", null);
    MobileSidebarToggleDirective = __decorate([
        Directive({
            selector: '[appMobileSidebarToggler]'
        }),
        __param(0, Inject(DOCUMENT)),
        __metadata("design:paramtypes", [Object, Renderer2])
    ], MobileSidebarToggleDirective);
    return MobileSidebarToggleDirective;
}());
export { MobileSidebarToggleDirective };
/**
* Allows the off-canvas sidebar to be closed via click.
*/
var SidebarOffCanvasCloseDirective = /** @class */ (function () {
    function SidebarOffCanvasCloseDirective(document, renderer) {
        this.document = document;
        this.renderer = renderer;
    }
    SidebarOffCanvasCloseDirective.prototype.toggleOpen = function ($event) {
        $event.preventDefault();
        var body = this.document.body;
        if (body.classList.contains('sidebar-off-canvas')) {
            body.classList.contains('sidebar-show') ?
                this.renderer.removeClass(body, 'sidebar-show') :
                this.renderer.addClass(body, 'sidebar-show');
        }
    };
    SidebarOffCanvasCloseDirective.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: Inject, args: [DOCUMENT,] }] },
        { type: Renderer2 }
    ]; };
    __decorate([
        HostListener('click', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], SidebarOffCanvasCloseDirective.prototype, "toggleOpen", null);
    SidebarOffCanvasCloseDirective = __decorate([
        Directive({
            selector: '[appSidebarClose]'
        }),
        __param(0, Inject(DOCUMENT)),
        __metadata("design:paramtypes", [Object, Renderer2])
    ], SidebarOffCanvasCloseDirective);
    return SidebarOffCanvasCloseDirective;
}());
export { SidebarOffCanvasCloseDirective };
var BrandMinimizeDirective = /** @class */ (function () {
    function BrandMinimizeDirective(document, renderer) {
        this.document = document;
        this.renderer = renderer;
    }
    BrandMinimizeDirective.prototype.toggleOpen = function ($event) {
        $event.preventDefault();
        var body = this.document.body;
        body.classList.contains('brand-minimized') ?
            this.renderer.removeClass(body, 'brand-minimized') :
            this.renderer.addClass(body, 'brand-minimized');
    };
    BrandMinimizeDirective.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: Inject, args: [DOCUMENT,] }] },
        { type: Renderer2 }
    ]; };
    __decorate([
        HostListener('click', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], BrandMinimizeDirective.prototype, "toggleOpen", null);
    BrandMinimizeDirective = __decorate([
        Directive({
            selector: '[appBrandMinimizer]'
        }),
        __param(0, Inject(DOCUMENT)),
        __metadata("design:paramtypes", [Object, Renderer2])
    ], BrandMinimizeDirective);
    return BrandMinimizeDirective;
}());
export { BrandMinimizeDirective };
/**
* Allows the aside to be toggled via click.
*/
var AsideToggleDirective = /** @class */ (function () {
    function AsideToggleDirective(classToggler) {
        this.classToggler = classToggler;
    }
    AsideToggleDirective.prototype.ngOnInit = function () {
        this.bp = this.breakpoint;
    };
    AsideToggleDirective.prototype.toggleOpen = function ($event) {
        $event.preventDefault();
        var cssClass = this.bp ? "aside-menu-" + this.bp + "-show" : asideMenuCssClasses[0];
        this.classToggler.toggleClasses(cssClass, asideMenuCssClasses);
    };
    AsideToggleDirective.ctorParameters = function () { return [
        { type: ClassToggler }
    ]; };
    __decorate([
        Input('appAsideMenuToggler'),
        __metadata("design:type", String)
    ], AsideToggleDirective.prototype, "breakpoint", void 0);
    __decorate([
        HostListener('click', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], AsideToggleDirective.prototype, "toggleOpen", null);
    AsideToggleDirective = __decorate([
        Directive({
            selector: '[appAsideMenuToggler]',
            providers: [ClassToggler]
        }),
        __metadata("design:paramtypes", [ClassToggler])
    ], AsideToggleDirective);
    return AsideToggleDirective;
}());
export { AsideToggleDirective };
var HtmlAttributesDirective = /** @class */ (function () {
    function HtmlAttributesDirective(renderer, el) {
        this.renderer = renderer;
        this.el = el;
    }
    HtmlAttributesDirective.prototype.ngOnInit = function () {
        var attribs = this.appHtmlAttr;
        for (var attr in attribs) {
            if (attr === 'style' && typeof (attribs[attr]) === 'object') {
                this.setStyle(attribs[attr]);
            }
            else if (attr === 'class') {
                this.addClass(attribs[attr]);
            }
            else {
                this.setAttrib(attr, attribs[attr]);
            }
        }
    };
    HtmlAttributesDirective.prototype.setStyle = function (styles) {
        for (var style in styles) {
            this.renderer.setStyle(this.el.nativeElement, style, styles[style]);
        }
    };
    HtmlAttributesDirective.prototype.addClass = function (classes) {
        var _this = this;
        var classArray = (Array.isArray(classes) ? classes : classes.split(' '));
        classArray.filter(function (element) { return element.length > 0; }).forEach(function (element) {
            _this.renderer.addClass(_this.el.nativeElement, element);
        });
    };
    HtmlAttributesDirective.prototype.setAttrib = function (key, value) {
        value !== null ?
            this.renderer.setAttribute(this.el.nativeElement, key, value) :
            this.renderer.removeAttribute(this.el.nativeElement, key);
    };
    HtmlAttributesDirective.ctorParameters = function () { return [
        { type: Renderer2 },
        { type: ElementRef }
    ]; };
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], HtmlAttributesDirective.prototype, "appHtmlAttr", void 0);
    HtmlAttributesDirective = __decorate([
        Directive({
            selector: '[appHtmlAttr]'
        }),
        __metadata("design:paramtypes", [Renderer2,
            ElementRef])
    ], HtmlAttributesDirective);
    return HtmlAttributesDirective;
}());
export { HtmlAttributesDirective };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGF5b3V0LmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bjb3JldWkvYW5ndWxhci8iLCJzb3VyY2VzIjpbImxpYi9zaGFyZWQvbGF5b3V0L2xheW91dC5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBQyxTQUFTLEVBQUUsVUFBVSxFQUFFLFlBQVksRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDcEcsT0FBTyxFQUFDLFFBQVEsRUFBQyxNQUFNLGlCQUFpQixDQUFDO0FBRXpDLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxpQkFBaUIsRUFBRSxNQUFNLFlBQVksQ0FBQztBQUNwRSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFFakQ7O0VBRUU7QUFLRjtJQUdFLGdDQUFvQixZQUEwQjtRQUExQixpQkFBWSxHQUFaLFlBQVksQ0FBYztJQUFHLENBQUM7SUFDbEQseUNBQVEsR0FBUjtRQUNFLElBQUksQ0FBQyxFQUFFLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQztJQUM1QixDQUFDO0lBRUQsMkNBQVUsR0FBVixVQUFXLE1BQVc7UUFDcEIsTUFBTSxDQUFDLGNBQWMsRUFBRSxDQUFDO1FBQ3hCLElBQU0sUUFBUSxHQUFHLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLGFBQVcsSUFBSSxDQUFDLEVBQUUsVUFBTyxDQUFDLENBQUMsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUM1RSxJQUFJLENBQUMsWUFBWSxDQUFDLGFBQWEsQ0FBQyxRQUFRLEVBQUUsaUJBQWlCLENBQUMsQ0FBQztJQUMvRCxDQUFDOztnQkFUaUMsWUFBWTs7SUFGbEI7UUFBM0IsS0FBSyxDQUFDLG1CQUFtQixDQUFDOzs4REFBb0I7SUFPL0M7UUFEQyxZQUFZLENBQUMsT0FBTyxFQUFFLENBQUMsUUFBUSxDQUFDLENBQUM7Ozs7NERBS2pDO0lBWlUsc0JBQXNCO1FBSmxDLFNBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxxQkFBcUI7WUFDL0IsU0FBUyxFQUFFLENBQUMsWUFBWSxDQUFDO1NBQzFCLENBQUM7eUNBSWtDLFlBQVk7T0FIbkMsc0JBQXNCLENBYWxDO0lBQUQsNkJBQUM7Q0FBQSxBQWJELElBYUM7U0FiWSxzQkFBc0I7QUFrQm5DO0lBQ0Usa0NBQzRCLFFBQWEsRUFDL0IsUUFBbUI7UUFERCxhQUFRLEdBQVIsUUFBUSxDQUFLO1FBQy9CLGFBQVEsR0FBUixRQUFRLENBQVc7SUFDekIsQ0FBQztJQUdMLDZDQUFVLEdBQVYsVUFBVyxNQUFXO1FBQ3BCLE1BQU0sQ0FBQyxjQUFjLEVBQUUsQ0FBQztRQUN4QixJQUFNLElBQUksR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQztRQUNoQyxJQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDLENBQUM7WUFDNUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxXQUFXLENBQUMsSUFBSSxFQUFFLG1CQUFtQixDQUFDLENBQUMsQ0FBQztZQUN0RCxJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxJQUFJLEVBQUUsbUJBQW1CLENBQUMsQ0FBQztJQUN0RCxDQUFDOztnREFYRSxNQUFNLFNBQUMsUUFBUTtnQkFDRSxTQUFTOztJQUk3QjtRQURDLFlBQVksQ0FBQyxPQUFPLEVBQUUsQ0FBQyxRQUFRLENBQUMsQ0FBQzs7Ozs4REFPakM7SUFiVSx3QkFBd0I7UUFIcEMsU0FBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLHVCQUF1QjtTQUNsQyxDQUFDO1FBR0csV0FBQSxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUE7aURBQ0MsU0FBUztPQUhsQix3QkFBd0IsQ0FjcEM7SUFBRCwrQkFBQztDQUFBLEFBZEQsSUFjQztTQWRZLHdCQUF3QjtBQW1CckM7SUFDRSxzQ0FDNEIsUUFBYSxFQUMvQixRQUFtQjtRQURELGFBQVEsR0FBUixRQUFRLENBQUs7UUFDL0IsYUFBUSxHQUFSLFFBQVEsQ0FBVztJQUN6QixDQUFDO0lBR0wsaURBQVUsR0FBVixVQUFXLE1BQVc7UUFDcEIsTUFBTSxDQUFDLGNBQWMsRUFBRSxDQUFDO1FBQ3hCLElBQU0sSUFBSSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDO1FBQ2hDLElBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUM7WUFDdkMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxXQUFXLENBQUMsSUFBSSxFQUFFLGNBQWMsQ0FBQyxDQUFDLENBQUM7WUFDakQsSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsSUFBSSxFQUFFLGNBQWMsQ0FBQyxDQUFDO0lBQ2pELENBQUM7O2dEQVhFLE1BQU0sU0FBQyxRQUFRO2dCQUNFLFNBQVM7O0lBSTdCO1FBREMsWUFBWSxDQUFDLE9BQU8sRUFBRSxDQUFDLFFBQVEsQ0FBQyxDQUFDOzs7O2tFQU9qQztJQWJVLDRCQUE0QjtRQUh4QyxTQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsMkJBQTJCO1NBQ3RDLENBQUM7UUFHRyxXQUFBLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQTtpREFDQyxTQUFTO09BSGxCLDRCQUE0QixDQWN4QztJQUFELG1DQUFDO0NBQUEsQUFkRCxJQWNDO1NBZFksNEJBQTRCO0FBZ0J6Qzs7RUFFRTtBQUlGO0lBQ0Usd0NBQzRCLFFBQWEsRUFDL0IsUUFBbUI7UUFERCxhQUFRLEdBQVIsUUFBUSxDQUFLO1FBQy9CLGFBQVEsR0FBUixRQUFRLENBQVc7SUFDekIsQ0FBQztJQUdMLG1EQUFVLEdBQVYsVUFBVyxNQUFXO1FBQ3BCLE1BQU0sQ0FBQyxjQUFjLEVBQUUsQ0FBQztRQUV4QixJQUFNLElBQUksR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQztRQUNoQyxJQUFJLElBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLG9CQUFvQixDQUFDLEVBQUU7WUFDakQsSUFBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsY0FBYyxDQUFDLENBQUMsQ0FBQztnQkFDdkMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxXQUFXLENBQUMsSUFBSSxFQUFFLGNBQWMsQ0FBQyxDQUFDLENBQUM7Z0JBQ2pELElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLElBQUksRUFBRSxjQUFjLENBQUMsQ0FBQztTQUNoRDtJQUNILENBQUM7O2dEQWRFLE1BQU0sU0FBQyxRQUFRO2dCQUNFLFNBQVM7O0lBSTdCO1FBREMsWUFBWSxDQUFDLE9BQU8sRUFBRSxDQUFDLFFBQVEsQ0FBQyxDQUFDOzs7O29FQVVqQztJQWhCVSw4QkFBOEI7UUFIMUMsU0FBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLG1CQUFtQjtTQUM5QixDQUFDO1FBR0csV0FBQSxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUE7aURBQ0MsU0FBUztPQUhsQiw4QkFBOEIsQ0FpQjFDO0lBQUQscUNBQUM7Q0FBQSxBQWpCRCxJQWlCQztTQWpCWSw4QkFBOEI7QUFzQjNDO0lBQ0UsZ0NBQzRCLFFBQWEsRUFDL0IsUUFBbUI7UUFERCxhQUFRLEdBQVIsUUFBUSxDQUFLO1FBQy9CLGFBQVEsR0FBUixRQUFRLENBQVc7SUFDekIsQ0FBQztJQUdMLDJDQUFVLEdBQVYsVUFBVyxNQUFXO1FBQ3BCLE1BQU0sQ0FBQyxjQUFjLEVBQUUsQ0FBQztRQUN4QixJQUFNLElBQUksR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQztRQUNoQyxJQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDLENBQUM7WUFDMUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxXQUFXLENBQUMsSUFBSSxFQUFFLGlCQUFpQixDQUFDLENBQUMsQ0FBQztZQUNwRCxJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxJQUFJLEVBQUUsaUJBQWlCLENBQUMsQ0FBQztJQUNwRCxDQUFDOztnREFYRSxNQUFNLFNBQUMsUUFBUTtnQkFDRSxTQUFTOztJQUk3QjtRQURDLFlBQVksQ0FBQyxPQUFPLEVBQUUsQ0FBQyxRQUFRLENBQUMsQ0FBQzs7Ozs0REFPakM7SUFiVSxzQkFBc0I7UUFIbEMsU0FBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLHFCQUFxQjtTQUNoQyxDQUFDO1FBR0csV0FBQSxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUE7aURBQ0MsU0FBUztPQUhsQixzQkFBc0IsQ0FjbEM7SUFBRCw2QkFBQztDQUFBLEFBZEQsSUFjQztTQWRZLHNCQUFzQjtBQWlCbkM7O0VBRUU7QUFLRjtJQUdFLDhCQUFvQixZQUEwQjtRQUExQixpQkFBWSxHQUFaLFlBQVksQ0FBYztJQUFHLENBQUM7SUFDbEQsdUNBQVEsR0FBUjtRQUNFLElBQUksQ0FBQyxFQUFFLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQztJQUM1QixDQUFDO0lBRUQseUNBQVUsR0FBVixVQUFXLE1BQVc7UUFDcEIsTUFBTSxDQUFDLGNBQWMsRUFBRSxDQUFDO1FBQ3hCLElBQU0sUUFBUSxHQUFHLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLGdCQUFjLElBQUksQ0FBQyxFQUFFLFVBQU8sQ0FBQyxDQUFDLENBQUMsbUJBQW1CLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDakYsSUFBSSxDQUFDLFlBQVksQ0FBQyxhQUFhLENBQUMsUUFBUSxFQUFFLG1CQUFtQixDQUFDLENBQUM7SUFDakUsQ0FBQzs7Z0JBVGlDLFlBQVk7O0lBRmhCO1FBQTdCLEtBQUssQ0FBQyxxQkFBcUIsQ0FBQzs7NERBQW9CO0lBT2pEO1FBREMsWUFBWSxDQUFDLE9BQU8sRUFBRSxDQUFDLFFBQVEsQ0FBQyxDQUFDOzs7OzBEQUtqQztJQVpVLG9CQUFvQjtRQUpoQyxTQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsdUJBQXVCO1lBQ2pDLFNBQVMsRUFBRSxDQUFDLFlBQVksQ0FBQztTQUMxQixDQUFDO3lDQUlrQyxZQUFZO09BSG5DLG9CQUFvQixDQWFoQztJQUFELDJCQUFDO0NBQUEsQUFiRCxJQWFDO1NBYlksb0JBQW9CO0FBa0JqQztJQUdFLGlDQUNVLFFBQW1CLEVBQ25CLEVBQWM7UUFEZCxhQUFRLEdBQVIsUUFBUSxDQUFXO1FBQ25CLE9BQUUsR0FBRixFQUFFLENBQVk7SUFDckIsQ0FBQztJQUVKLDBDQUFRLEdBQVI7UUFDRSxJQUFNLE9BQU8sR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDO1FBQ2pDLEtBQUssSUFBTSxJQUFJLElBQUksT0FBTyxFQUFFO1lBQzFCLElBQUksSUFBSSxLQUFLLE9BQU8sSUFBSSxPQUFNLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDLEtBQUssUUFBUSxFQUFHO2dCQUMzRCxJQUFJLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO2FBQzlCO2lCQUFNLElBQUksSUFBSSxLQUFLLE9BQU8sRUFBRTtnQkFDM0IsSUFBSSxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQzthQUM5QjtpQkFBTTtnQkFDTCxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksRUFBRSxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQzthQUNyQztTQUNGO0lBQ0gsQ0FBQztJQUVPLDBDQUFRLEdBQWhCLFVBQWlCLE1BQU07UUFDckIsS0FBSyxJQUFNLEtBQUssSUFBSSxNQUFNLEVBQUU7WUFDMUIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxhQUFhLEVBQUUsS0FBSyxFQUFFLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBRSxDQUFDO1NBQ3RFO0lBQ0gsQ0FBQztJQUVPLDBDQUFRLEdBQWhCLFVBQWlCLE9BQU87UUFBeEIsaUJBS0M7UUFKQyxJQUFNLFVBQVUsR0FBRyxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO1FBQzNFLFVBQVUsQ0FBQyxNQUFNLENBQUMsVUFBQyxPQUFPLElBQUssT0FBQSxPQUFPLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBbEIsQ0FBa0IsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxVQUFBLE9BQU87WUFDaEUsS0FBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsS0FBSSxDQUFDLEVBQUUsQ0FBQyxhQUFhLEVBQUUsT0FBTyxDQUFFLENBQUM7UUFDMUQsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBRU8sMkNBQVMsR0FBakIsVUFBa0IsR0FBRyxFQUFFLEtBQUs7UUFDMUIsS0FBSyxLQUFLLElBQUksQ0FBQyxDQUFDO1lBQ2QsSUFBSSxDQUFDLFFBQVEsQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxhQUFhLEVBQUUsR0FBRyxFQUFFLEtBQUssQ0FBRSxDQUFDLENBQUM7WUFDaEUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxhQUFhLEVBQUUsR0FBRyxDQUFDLENBQUM7SUFDOUQsQ0FBQzs7Z0JBbENtQixTQUFTO2dCQUNmLFVBQVU7O0lBSmY7UUFBUixLQUFLLEVBQUU7O2dFQUF1QztJQURwQyx1QkFBdUI7UUFIbkMsU0FBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLGVBQWU7U0FDMUIsQ0FBQzt5Q0FLb0IsU0FBUztZQUNmLFVBQVU7T0FMYix1QkFBdUIsQ0F1Q25DO0lBQUQsOEJBQUM7Q0FBQSxBQXZDRCxJQXVDQztTQXZDWSx1QkFBdUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0RpcmVjdGl2ZSwgRWxlbWVudFJlZiwgSG9zdExpc3RlbmVyLCBJbmplY3QsIElucHV0LCBPbkluaXQsIFJlbmRlcmVyMn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7RE9DVU1FTlR9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XHJcblxyXG5pbXBvcnQgeyBhc2lkZU1lbnVDc3NDbGFzc2VzLCBzaWRlYmFyQ3NzQ2xhc3NlcyB9IGZyb20gJy4uL2NsYXNzZXMnO1xyXG5pbXBvcnQgeyBDbGFzc1RvZ2dsZXIgfSBmcm9tICcuLi90b2dnbGUtY2xhc3Nlcyc7XHJcblxyXG4vKipcclxuKiBBbGxvd3MgdGhlIHNpZGViYXIgdG8gYmUgdG9nZ2xlZCB2aWEgY2xpY2suXHJcbiovXHJcbkBEaXJlY3RpdmUoe1xyXG4gIHNlbGVjdG9yOiAnW2FwcFNpZGViYXJUb2dnbGVyXScsXHJcbiAgcHJvdmlkZXJzOiBbQ2xhc3NUb2dnbGVyXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgU2lkZWJhclRvZ2dsZURpcmVjdGl2ZSBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcbiAgQElucHV0KCdhcHBTaWRlYmFyVG9nZ2xlcicpIGJyZWFrcG9pbnQ6IHN0cmluZztcclxuICBwdWJsaWMgYnA7XHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBjbGFzc1RvZ2dsZXI6IENsYXNzVG9nZ2xlcikge31cclxuICBuZ09uSW5pdCgpOiB2b2lkIHtcclxuICAgIHRoaXMuYnAgPSB0aGlzLmJyZWFrcG9pbnQ7XHJcbiAgfVxyXG4gIEBIb3N0TGlzdGVuZXIoJ2NsaWNrJywgWyckZXZlbnQnXSlcclxuICB0b2dnbGVPcGVuKCRldmVudDogYW55KSB7XHJcbiAgICAkZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgIGNvbnN0IGNzc0NsYXNzID0gdGhpcy5icCA/IGBzaWRlYmFyLSR7dGhpcy5icH0tc2hvd2AgOiBzaWRlYmFyQ3NzQ2xhc3Nlc1swXTtcclxuICAgIHRoaXMuY2xhc3NUb2dnbGVyLnRvZ2dsZUNsYXNzZXMoY3NzQ2xhc3MsIHNpZGViYXJDc3NDbGFzc2VzKTtcclxuICB9XHJcbn1cclxuXHJcbkBEaXJlY3RpdmUoe1xyXG4gIHNlbGVjdG9yOiAnW2FwcFNpZGViYXJNaW5pbWl6ZXJdJ1xyXG59KVxyXG5leHBvcnQgY2xhc3MgU2lkZWJhck1pbmltaXplRGlyZWN0aXZlIHtcclxuICBjb25zdHJ1Y3RvcihcclxuICAgIEBJbmplY3QoRE9DVU1FTlQpIHByaXZhdGUgZG9jdW1lbnQ6IGFueSxcclxuICAgIHByaXZhdGUgcmVuZGVyZXI6IFJlbmRlcmVyMixcclxuICApIHsgfVxyXG5cclxuICBASG9zdExpc3RlbmVyKCdjbGljaycsIFsnJGV2ZW50J10pXHJcbiAgdG9nZ2xlT3BlbigkZXZlbnQ6IGFueSkge1xyXG4gICAgJGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBjb25zdCBib2R5ID0gdGhpcy5kb2N1bWVudC5ib2R5O1xyXG4gICAgYm9keS5jbGFzc0xpc3QuY29udGFpbnMoJ3NpZGViYXItbWluaW1pemVkJykgP1xyXG4gICAgICB0aGlzLnJlbmRlcmVyLnJlbW92ZUNsYXNzKGJvZHksICdzaWRlYmFyLW1pbmltaXplZCcpIDpcclxuICAgICAgdGhpcy5yZW5kZXJlci5hZGRDbGFzcyhib2R5LCAnc2lkZWJhci1taW5pbWl6ZWQnKTtcclxuICB9XHJcbn1cclxuXHJcbkBEaXJlY3RpdmUoe1xyXG4gIHNlbGVjdG9yOiAnW2FwcE1vYmlsZVNpZGViYXJUb2dnbGVyXSdcclxufSlcclxuZXhwb3J0IGNsYXNzIE1vYmlsZVNpZGViYXJUb2dnbGVEaXJlY3RpdmUge1xyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgQEluamVjdChET0NVTUVOVCkgcHJpdmF0ZSBkb2N1bWVudDogYW55LFxyXG4gICAgcHJpdmF0ZSByZW5kZXJlcjogUmVuZGVyZXIyLFxyXG4gICkgeyB9XHJcblxyXG4gIEBIb3N0TGlzdGVuZXIoJ2NsaWNrJywgWyckZXZlbnQnXSlcclxuICB0b2dnbGVPcGVuKCRldmVudDogYW55KSB7XHJcbiAgICAkZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgIGNvbnN0IGJvZHkgPSB0aGlzLmRvY3VtZW50LmJvZHk7XHJcbiAgICBib2R5LmNsYXNzTGlzdC5jb250YWlucygnc2lkZWJhci1zaG93JykgP1xyXG4gICAgICB0aGlzLnJlbmRlcmVyLnJlbW92ZUNsYXNzKGJvZHksICdzaWRlYmFyLXNob3cnKSA6XHJcbiAgICAgIHRoaXMucmVuZGVyZXIuYWRkQ2xhc3MoYm9keSwgJ3NpZGViYXItc2hvdycpO1xyXG4gIH1cclxufVxyXG5cclxuLyoqXHJcbiogQWxsb3dzIHRoZSBvZmYtY2FudmFzIHNpZGViYXIgdG8gYmUgY2xvc2VkIHZpYSBjbGljay5cclxuKi9cclxuQERpcmVjdGl2ZSh7XHJcbiAgc2VsZWN0b3I6ICdbYXBwU2lkZWJhckNsb3NlXSdcclxufSlcclxuZXhwb3J0IGNsYXNzIFNpZGViYXJPZmZDYW52YXNDbG9zZURpcmVjdGl2ZSB7XHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBASW5qZWN0KERPQ1VNRU5UKSBwcml2YXRlIGRvY3VtZW50OiBhbnksXHJcbiAgICBwcml2YXRlIHJlbmRlcmVyOiBSZW5kZXJlcjIsXHJcbiAgKSB7IH1cclxuXHJcbiAgQEhvc3RMaXN0ZW5lcignY2xpY2snLCBbJyRldmVudCddKVxyXG4gIHRvZ2dsZU9wZW4oJGV2ZW50OiBhbnkpIHtcclxuICAgICRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICAgIGNvbnN0IGJvZHkgPSB0aGlzLmRvY3VtZW50LmJvZHk7XHJcbiAgICBpZiAoYm9keS5jbGFzc0xpc3QuY29udGFpbnMoJ3NpZGViYXItb2ZmLWNhbnZhcycpKSB7XHJcbiAgICAgIGJvZHkuY2xhc3NMaXN0LmNvbnRhaW5zKCdzaWRlYmFyLXNob3cnKSA/XHJcbiAgICAgICAgdGhpcy5yZW5kZXJlci5yZW1vdmVDbGFzcyhib2R5LCAnc2lkZWJhci1zaG93JykgOlxyXG4gICAgICAgIHRoaXMucmVuZGVyZXIuYWRkQ2xhc3MoYm9keSwgJ3NpZGViYXItc2hvdycpO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuQERpcmVjdGl2ZSh7XHJcbiAgc2VsZWN0b3I6ICdbYXBwQnJhbmRNaW5pbWl6ZXJdJ1xyXG59KVxyXG5leHBvcnQgY2xhc3MgQnJhbmRNaW5pbWl6ZURpcmVjdGl2ZSB7XHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBASW5qZWN0KERPQ1VNRU5UKSBwcml2YXRlIGRvY3VtZW50OiBhbnksXHJcbiAgICBwcml2YXRlIHJlbmRlcmVyOiBSZW5kZXJlcjIsXHJcbiAgKSB7IH1cclxuXHJcbiAgQEhvc3RMaXN0ZW5lcignY2xpY2snLCBbJyRldmVudCddKVxyXG4gIHRvZ2dsZU9wZW4oJGV2ZW50OiBhbnkpIHtcclxuICAgICRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgY29uc3QgYm9keSA9IHRoaXMuZG9jdW1lbnQuYm9keTtcclxuICAgIGJvZHkuY2xhc3NMaXN0LmNvbnRhaW5zKCdicmFuZC1taW5pbWl6ZWQnKSA/XHJcbiAgICAgIHRoaXMucmVuZGVyZXIucmVtb3ZlQ2xhc3MoYm9keSwgJ2JyYW5kLW1pbmltaXplZCcpIDpcclxuICAgICAgdGhpcy5yZW5kZXJlci5hZGRDbGFzcyhib2R5LCAnYnJhbmQtbWluaW1pemVkJyk7XHJcbiAgfVxyXG59XHJcblxyXG5cclxuLyoqXHJcbiogQWxsb3dzIHRoZSBhc2lkZSB0byBiZSB0b2dnbGVkIHZpYSBjbGljay5cclxuKi9cclxuQERpcmVjdGl2ZSh7XHJcbiAgc2VsZWN0b3I6ICdbYXBwQXNpZGVNZW51VG9nZ2xlcl0nLFxyXG4gIHByb3ZpZGVyczogW0NsYXNzVG9nZ2xlcl1cclxufSlcclxuZXhwb3J0IGNsYXNzIEFzaWRlVG9nZ2xlRGlyZWN0aXZlIGltcGxlbWVudHMgT25Jbml0IHtcclxuICBASW5wdXQoJ2FwcEFzaWRlTWVudVRvZ2dsZXInKSBicmVha3BvaW50OiBzdHJpbmc7XHJcbiAgcHVibGljIGJwO1xyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgY2xhc3NUb2dnbGVyOiBDbGFzc1RvZ2dsZXIpIHt9XHJcbiAgbmdPbkluaXQoKTogdm9pZCB7XHJcbiAgICB0aGlzLmJwID0gdGhpcy5icmVha3BvaW50O1xyXG4gIH1cclxuICBASG9zdExpc3RlbmVyKCdjbGljaycsIFsnJGV2ZW50J10pXHJcbiAgdG9nZ2xlT3BlbigkZXZlbnQ6IGFueSkge1xyXG4gICAgJGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBjb25zdCBjc3NDbGFzcyA9IHRoaXMuYnAgPyBgYXNpZGUtbWVudS0ke3RoaXMuYnB9LXNob3dgIDogYXNpZGVNZW51Q3NzQ2xhc3Nlc1swXTtcclxuICAgIHRoaXMuY2xhc3NUb2dnbGVyLnRvZ2dsZUNsYXNzZXMoY3NzQ2xhc3MsIGFzaWRlTWVudUNzc0NsYXNzZXMpO1xyXG4gIH1cclxufVxyXG5cclxuQERpcmVjdGl2ZSh7XHJcbiAgc2VsZWN0b3I6ICdbYXBwSHRtbEF0dHJdJ1xyXG59KVxyXG5leHBvcnQgY2xhc3MgSHRtbEF0dHJpYnV0ZXNEaXJlY3RpdmUgaW1wbGVtZW50cyBPbkluaXQge1xyXG4gIEBJbnB1dCgpIGFwcEh0bWxBdHRyOiB7W2tleTogc3RyaW5nXTogc3RyaW5nIH07XHJcblxyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgcHJpdmF0ZSByZW5kZXJlcjogUmVuZGVyZXIyLFxyXG4gICAgcHJpdmF0ZSBlbDogRWxlbWVudFJlZlxyXG4gICkge31cclxuXHJcbiAgbmdPbkluaXQoKSB7XHJcbiAgICBjb25zdCBhdHRyaWJzID0gdGhpcy5hcHBIdG1sQXR0cjtcclxuICAgIGZvciAoY29uc3QgYXR0ciBpbiBhdHRyaWJzKSB7XHJcbiAgICAgIGlmIChhdHRyID09PSAnc3R5bGUnICYmIHR5cGVvZihhdHRyaWJzW2F0dHJdKSA9PT0gJ29iamVjdCcgKSB7XHJcbiAgICAgICAgdGhpcy5zZXRTdHlsZShhdHRyaWJzW2F0dHJdKTtcclxuICAgICAgfSBlbHNlIGlmIChhdHRyID09PSAnY2xhc3MnKSB7XHJcbiAgICAgICAgdGhpcy5hZGRDbGFzcyhhdHRyaWJzW2F0dHJdKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICB0aGlzLnNldEF0dHJpYihhdHRyLCBhdHRyaWJzW2F0dHJdKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBzZXRTdHlsZShzdHlsZXMpIHtcclxuICAgIGZvciAoY29uc3Qgc3R5bGUgaW4gc3R5bGVzKSB7XHJcbiAgICAgIHRoaXMucmVuZGVyZXIuc2V0U3R5bGUodGhpcy5lbC5uYXRpdmVFbGVtZW50LCBzdHlsZSwgc3R5bGVzW3N0eWxlXSApO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBhZGRDbGFzcyhjbGFzc2VzKSB7XHJcbiAgICBjb25zdCBjbGFzc0FycmF5ID0gKEFycmF5LmlzQXJyYXkoY2xhc3NlcykgPyBjbGFzc2VzIDogY2xhc3Nlcy5zcGxpdCgnICcpKTtcclxuICAgIGNsYXNzQXJyYXkuZmlsdGVyKChlbGVtZW50KSA9PiBlbGVtZW50Lmxlbmd0aCA+IDApLmZvckVhY2goZWxlbWVudCA9PiB7XHJcbiAgICAgIHRoaXMucmVuZGVyZXIuYWRkQ2xhc3ModGhpcy5lbC5uYXRpdmVFbGVtZW50LCBlbGVtZW50ICk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgc2V0QXR0cmliKGtleSwgdmFsdWUpIHtcclxuICAgIHZhbHVlICE9PSBudWxsID9cclxuICAgICAgdGhpcy5yZW5kZXJlci5zZXRBdHRyaWJ1dGUodGhpcy5lbC5uYXRpdmVFbGVtZW50LCBrZXksIHZhbHVlICkgOlxyXG4gICAgICB0aGlzLnJlbmRlcmVyLnJlbW92ZUF0dHJpYnV0ZSh0aGlzLmVsLm5hdGl2ZUVsZW1lbnQsIGtleSk7XHJcbiAgfVxyXG59XHJcbiJdfQ==