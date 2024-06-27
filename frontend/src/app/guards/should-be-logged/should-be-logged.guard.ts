import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth/auth.service';

export const shouldBeLoggedGuard: CanActivateFn = (route, state) => {
    const authService = inject(AuthService)
    const router = inject(Router)
    if (authService.getToken()) {
        return true
    }
    router.navigate(['/home'])
    return false;
};
