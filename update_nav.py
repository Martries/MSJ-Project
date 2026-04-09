import os
import glob

old_nav = '''<nav class="navbar navbar-expand-lg bg-body-tertiary navbar-transparent">
  <div class="container-fluid">
    <a class="navbar-brand" href="#"><img src="/images/msjnew-logo.JPG" alt="Brand logo" height="100px"></a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    </div>    
    <!-- Nav links -->
    <div class="collapse navbar-collapse nav-links" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link  page-loader" aria-current="page" href="/index.html">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link page-loader" href="/about.html">About Us</a>
        </li>
        <li class="nav-item">
          <a class="nav-link page-loader active" href="/speakers.html">Speakers</a>
        </li>
        <li class="nav-item">
          <a class="nav-link page-loader" href="/contact.html">Contact Us</a>
        </li>
      </ul>    
  </div>
</nav>'''

new_nav = '''<nav class="navbar navbar-expand-lg bg-body-tertiary navbar-transparent">
  <div class="container-fluid">
    <a class="navbar-brand" id="top-logo" href="/index.html"><img src="/images/msjnew-logo.JPG" alt="Brand logo" height="100px"></a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse nav-links" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link page-loader" href="/index.html">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link page-loader" href="/about.html">About Us</a>
        </li>
        <li class="nav-item">
          <a class="nav-link page-loader active" href="/speakers.html">Speakers</a>
        </li>
        <li class="nav-item">
          <a class="nav-link page-loader" href="/workshops.html">Workshops</a>
        </li>
        <li class="nav-item">
          <a class="nav-link page-loader" href="/opportunities.html">Opportunities</a>
        </li>
        <li class="nav-item">
          <a class="nav-link page-loader" href="/contact.html">Contact</a>
        </li>
        <li class="nav-item">
          <a class="nav-link page-loader" href="https://medium.com/@journeythescience" target="_blank">Blogs</a>
        </li>
      </ul>
    </div>
  </div>
</nav>'''

# Find all HTML files in speakers-bio and team-deets folders
html_files = glob.glob('speakers-bio/**/*.html', recursive=True)
html_files += glob.glob('team-deets/*.html')

updated = 0
skipped = 0

for filepath in html_files:
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()
    
    if old_nav in content:
        new_content = content.replace(old_nav, new_nav)
        with open(filepath, 'w', encoding='utf-8') as f:
            f.write(new_content)
        print(f'Updated: {filepath}')
        updated += 1
    else:
        print(f'Skipped (nav not matched): {filepath}')
        skipped += 1

print(f'\nDone! Updated: {updated} files, Skipped: {skipped} files')