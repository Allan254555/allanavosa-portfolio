import { profile } from '../data/portfolio.js';

// One source for contact links, shown in both About and Contact.
// Empty profile values are skipped.
export function contactLinks() {
  return [
    profile.email && { k: 'Email', href: `mailto:${profile.email}`, label: profile.email },
    profile.phone && { k: 'Phone', href: `tel:${profile.phone}`, label: profile.phoneLabel || profile.phone },
    profile.linkedin && { k: 'LinkedIn', href: profile.linkedin, label: profile.linkedinLabel || profile.linkedin },
    profile.github && { k: 'GitHub', href: profile.github, label: profile.githubLabel || profile.github },
  ].filter(Boolean);
}

// Web links open in a new tab; mailto: and tel: open the mail or phone app.
export function linkProps(href) {
  return href.startsWith('http') ? { href, target: '_blank', rel: 'noopener noreferrer' } : { href };
}
