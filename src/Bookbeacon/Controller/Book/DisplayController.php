<?php
/**
 * Part of Bookbeacon project. 
 *
 * @copyright  Copyright (C) 2011 - 2015 Bookbeacon, Inc. All rights reserved.
 * @license    GNU General Public License version 2 or later; see LICENSE
 */

namespace BookBeacon\Controller\Book;


use Bookbeacon\Bookbeacon\Controller\BBController;

class DisplayController extends BBController
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
		echo '<h1>This is single book page</h1>';
	}
}