<?php
function tema_base_preprocess_page(&$vars)
{
    if (isset($vars['node']->type)) {
        $nodetype                         = $vars['node']->type;
        $vars['theme_hook_suggestions'][] = 'page__' . $nodetype;
    }
    if (isset($vars['page']['content']['system_main']['no_content'])) {
        unset($vars['page']['content']['system_main']['no_content']);
    }
}
function tema_base_links($variables)
{
    if (array_key_exists('id', $variables['attributes']) && $variables['attributes']['id'] == 'main-menu-links') {
        $pid  = variable_get('menu_main_links_source', 'main-menu');
        $tree = menu_tree($pid);
        return drupal_render($tree);
    }
    return theme_links($variables);
}

function tema_base_preprocess_html(&$vars)
{
    $viewport = array(
        '#tag'        => 'meta',
        '#attributes' => array(
            'name'    => 'viewport',
            'content' => 'width=device-width, initial-scale=1, maximum-scale=2, user-scalable=1',
        ),
    );
    drupal_add_html_head($viewport, 'viewport');
}
