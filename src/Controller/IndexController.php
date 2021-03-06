<?php
/**
 * Part of achiever project. 
 *
 * @copyright  Copyright (C) 2011 - 2015 Achiever, Inc. All rights reserved.
 * @license    GNU General Public License version 2 or later; see LICENSE
 */

namespace BookBeacon\Controller;


use BookBeacon\BookBeacon\Controller\BBController;
use BookBeacon\View\IndexHtmlView;
use Windwalker\Data\Data;

class IndexController extends BBController
{

	/**
	 * Execute the controller.
	 *
	 * @return  boolean  True if controller finished execution, false if the controller did not
	 *                   finish execution. A controller might return false if some precondition for
	 *                   the controller to run has not been satisfied.
	 *
	 * @since   1.0
	 * @throws  \LogicException
	 * @throws  \RuntimeException
	 */
	public function execute()
	{
		/** @var \BookBeacon\BookBeacon\Model\BBModel $model */
		//$model = new ACModel($this->container->get('db'));

		$testData = new Data(['age' => 18]);

		//$paths = new \SplPriorityQueue;

		// Insert template roots and load priority (with number)
		//$paths->insert(BB_TEMPLATE_ROOT_PATH . '/_global', 128);

		$view = new IndexHtmlView($testData);

		// This is important, don't forget to echo the rendered output
		echo $view->setLayout('index/index.twig')->render();
	}
}
 