FROM php:8.2-cli-bullseye

USER root

################################
# Install PHP libs and system dependencies
################################
RUN apt update \
    && apt install -y \
    zlib1g \
    libzip-dev \
    zip \
    unzip \
    libicu-dev \
    libyaml-dev \
    openssh-client \
    bash \
    wget \
    git \
\
################################
# Install PHP extensions
################################
\
    # Install gettext
        && docker-php-ext-install -j$(nproc) gettext \
        && true \
    \
    # Install bcmath
        && docker-php-ext-install -j$(nproc) bcmath \
        && true \
    \
    # Install intl
        && docker-php-ext-configure intl \
        && docker-php-ext-install -j$(nproc) intl \
        && docker-php-ext-enable intl \
        && true \
    \
    # Install yaml
        && pecl install yaml \
        && docker-php-ext-enable yaml \
        && true \
    \
    # Install zip
        && docker-php-ext-configure zip --with-zip \
        && docker-php-ext-install -j$(nproc) zip \
        && true \
    \
    # Install calendar
        && docker-php-ext-configure calendar \
        && docker-php-ext-install -j$(nproc) calendar \
        && true \
    \
    # Install xdebug \
        && pecl install xdebug && docker-php-ext-enable xdebug \
        ## disable xdebug by default
        && mv /usr/local/etc/php/conf.d/docker-php-ext-xdebug.ini /usr/local/etc/php/conf.d/docker-php-ext-xdebug.ini.disabled \
    \
    # Install Composer
        && php -r "copy('https://getcomposer.org/installer', 'composer-setup.php');" \
        && php composer-setup.php \
        && php -r "unlink('composer-setup.php');" \
        && chmod +x composer.phar \
        && mv composer.phar /usr/local/bin/composer \
        && composer --version \
        && true \
    \
    # Install Symfony CLI
        && curl -1sLf 'https://dl.cloudsmith.io/public/symfony/stable/setup.deb.sh' | bash \
        && apt-get install symfony-cli \
    # Clean up build packages
        && docker-php-source delete \
        && apt-get clean && rm -rf /var/lib/apt/lists/* /tmp/* /var/tmp/* \
        && rm -rf /tmp/pear \
        && true